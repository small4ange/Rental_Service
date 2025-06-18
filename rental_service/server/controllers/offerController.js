import { adaptOfferToClient, adaptFullOfferToClient } from "../adapters/offerAdapter.js";
import { Offer } from "../models/offer.js";
import { User } from "../models/user.js";
import ApiError from '../error/ApiError.js';


// возвращает все предложения из таблицы Offer
async function getAllOffers(req, res, next) {
    try {
        const offers = await Offer.findAll();
        const adaptedOffers = offers.map(adaptOfferToClient);
        res.status(200).json(adaptedOffers);
    } catch (error) {
        console.error('Не удалось получить список предложений:', error);
    }
}

export async function createOffer(req, res, next) {
 try {
   const {
     title, description, publishDate, city,
     isPremium, isFavorite, rating, type, rooms, guests, price,
     features, commentsCount, latitude, longitude, userId
   } = req.body;

   if (!req.files?.previewImage || req.files.previewImage.length === 0) {
     return next(ApiError.badRequest('Превью изображение обязательно для загрузки'));
   }

   const previewImagePath = `/static/${req.files.previewImage[0].filename}`;

   let processedPhotos = [];
   if (req.files?.photos) {
     processedPhotos = req.files.photos.map(file => `/static/${file.filename}`);
   }

   let parsedFeatures = [];
   if (features) {
     try {
       parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
     } catch {
       parsedFeatures = features.split(',');
     }
   }
   const offer = await Offer.create({
     title,
     description,
     publishDate,
     city,
     previewImage: previewImagePath,
     photos: processedPhotos,
     isPremium,
     isFavorite,
     rating,
     type,
     rooms,
     guests,
     price,
     features: parsedFeatures,
     commentsCount,
     latitude,
     longitude,
     authorId: userId
   });
   return res.status(201).json(offer);
 } catch (error) {
    console.error('Ошибка в createOffer:', error);
   next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
 }
}

export async function getFullOffer(req, res, next){
  try {
    // получаем id из параметров url
    let id = req.params.id;
    if (id.startsWith(':')) {
      id = id.slice(1);
    }
    console.log("id", id);

    if (isNaN(id)) {
      return next(ApiError.badRequest('Неверный формат ID'));
    }
    const offerId = parseInt(id, 10);

    const offer = await Offer.findByPk(offerId, {
      include: {
        model: User,
        as: 'author',
      }
    });
    console.log(offer);
    if (!offer) {
      return next(ApiError.badRequest('Оффер не найден'));
    }
    const adaptedOffer = adaptFullOfferToClient(offer, offer.author);
    return res.status(200).json(adaptedOffer);

  } catch (error) {
    console.log(error);
    next(ApiError.internal(error.message));
  }
};

export {getAllOffers};