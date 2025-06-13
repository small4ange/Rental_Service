export function OfferHeader() {
  return (
    <>
      <div className="offer__mark">
        <span>Premium</span>
      </div>
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          Beautiful &amp; luxurious studio at great location
        </h1>
        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use href="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
    </>
  );
}
