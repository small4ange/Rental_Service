import React from 'react'
import { Setting } from './const';
import ReactDOM from 'react-dom/client';
import App from "./components/app/app";
import {offers} from './mocks/offer';
import { offersList } from './mocks/offers-list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={Setting.rentOffersCount}
    offers = {offers}
    offersList = {offersList}
    />
  </React.StrictMode>
)

