import { OfferGalleryImg } from "../../../const";
export function OfferGallery() {
  return (
    <div className="offer__gallery">
      {OfferGalleryImg.map((src, index) => (
        <div className="offer__image-wrapper" key={index}>
          <img className="offer__image" src={src} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}
