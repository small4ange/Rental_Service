import { FavoriteCardList } from '../../favorite-card-list/favorite-card-list';
import Header from '../../components/header-component/header-component';
import { FavoriteOffer } from '../../types/offer';
import { JSX } from 'react';

type FavoritesPageProps = {
  favorites: FavoriteOffer[];
};

function FavoritesPage({ favorites }: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header></Header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList offers={favorites} />
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="#">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export { FavoritesPage };