const Setting = {
    rentOffersCount: 312,
} as const;

const OfferGalleryImg = [
        "img/room.jpg",
        "img/apartment-01.jpg",
        "img/apartment-02.jpg",
        "img/apartment-03.jpg",
        "img/studio-01.jpg",
        "img/apartment-01.jpg",
];

const OfferInsideItems = [
    "Wi-Fi",
    "Washing machine",
    "Towels",
    "Heating",
    "Coffee machine",
    "Baby seat",
    "Kitchen",
    "Dishwasher",
    "Cabel TV",
    "Fridge",
];

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

export {Setting, OfferGalleryImg, OfferInsideItems, AppRoute, AuthorizationStatus};