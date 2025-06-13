import { CitiesCard } from "../../components/cities-card/cities-card";
import { OfferFeatures } from "../../components/offer-components/offer-features/offer-features";
import { OfferGallery } from "../../components/offer-components/offer-gallery/offer-gallery";
import { OfferHeader } from "../../components/offer-components/offer-header/offer-header";
import { OfferInside } from "../../components/offer-components/offer-inside/offer-inside";
import { OfferPrice } from "../../components/offer-components/offer-price/offer-price";
import { OfferReviews } from "../../components/offer-components/offer-reviews/offer-reviews";

function OfferPage() {
  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferGallery/>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferHeader/>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: "80%" }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">4.8</span>
            </div>
            <OfferFeatures/>
            <OfferPrice/>
            <OfferInside/>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
          </div>
          <OfferReviews/>
        </div>
        <section className="offer__map map"></section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <CitiesCard/>
            <CitiesCard/>
          </div>
        </section>
      </div>
    </>
  );
}

export { OfferPage };
