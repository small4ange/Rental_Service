import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorites-page.tsx/favorites-page";
import { LoginPage } from "../../pages/login-page.tsx/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../error-404/error-404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offers: FullOffer[];
    offersList: OffersList[];
}

function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={[]}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
        <Route path={ `${AppRoute.Offer}/:id`} element = { <OfferPage offers={offers}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;