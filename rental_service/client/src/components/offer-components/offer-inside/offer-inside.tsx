import { OfferInsideItems } from "../../../const";

export function OfferInside() {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {OfferInsideItems.map((item) => (
          <li key={item} className="offer__inside-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
