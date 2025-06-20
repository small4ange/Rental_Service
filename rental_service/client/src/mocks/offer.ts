import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
    {
        'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. Jacuzzi top.',
        'type': 'apartment',
        'price': 370,
        'images': [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '7.jpg',
        ],
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 16
        },
        'goods':[
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Katka',
            'avatarUrl': 'avatar-katka.png'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        "id": "c1d02f3a-5e9b-4b7d-8a1c-9e3f5d7b2a4f",
        "title": "Modern Loft in City Center",
        "description": "Stylish loft with great view of the city skyline",
        "type": "apartment",
        "price": 210,
        "images": [
            "loft1.jpeg",
            "loft2.jpg",
            "loft3.webp",
            "loft4.jfif",
            "loft5.jfif"
        ],
        "city": {
            "name": "Cologne",
            "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
            }
        },
        "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 16
        },
        "goods": [
            "Wi-Fi",
            "Air conditioning",
            "Coffee machine",
            "Dishwasher",
            "Washing machine",
            "TV",
            "Iron"
        ],
        "host": {
            "isPro": false,
            "name": "Max",
            "avatarUrl": "avatar-max.jpg"
        },
        "isPremium": false,
        "isFavorite": false,
        "rating": 4.6,
        "bedrooms": 1,
        "maxAdults": 2
    },
    {
        "id": "d2e03f4b-6f9c-4c8e-9b2d-8f4e6a5b3c7d",
        "title": "Charming Cottage by the River",
        "description": "Quaint cottage with river view and private garden",
        "type": "house",
        "price": 145,
        "images": [
            "cottage1.jfif",
            "cottage2.jfif",
            "cottage3.webp",
            "cottage4.jfif"
        ],
        "city": {
            "name": "Brussels",
            "location": {
            "latitude": 50.850346,
            "longitude": 4.351721,
            "zoom": 13
            }
        },
        "location": {
            "latitude": 50.850346,
            "longitude": 4.351721,
            "zoom": 16
        },
        "goods": [
            "Heating",
            "Kitchen",
            "Towels",
            "Garden",
            "Parking",
            "BBQ",
            "Fireplace"
        ],
        "host": {
            "isPro": true,
            "name": "Anika",
            "avatarUrl": "avatar-anika.png"
        },
        "isPremium": true,
        "isFavorite": true,
        "rating": 4.9,
        "bedrooms": 3,
        "maxAdults": 5
    },
    {
        "id": "e3f14g5c-7h0d-5d9e-0a2b-9g4h6i7j8k9l",
        "title": "Luxury Penthouse with Pool",
        "description": "Exclusive penthouse with private pool and panoramic views",
        "type": "apartment",
        "price": 420,
        "images": [
            "penthouse1.jpg",
            "penthouse2.jpg",
            "penthouse3.jfif",
            "penthouse4.jfif",
            "penthouse5.jfif",
            "penthouse6.jfif"
        ],
        "city": {
            "name": "Hamburg",
            "location": {
            "latitude": 53.551086,
            "longitude": 9.993682,
            "zoom": 13
            }
        },
        "location": {
            "latitude": 53.551086,
            "longitude": 9.993682,
            "zoom": 16
        },
        "goods": [
            "Pool",
            "Air conditioning",
            "Jacuzzi",
            "Concierge",
            "Sauna",
            "Gym",
            "Smart TV",
            "Home cinema"
        ],
        "host": {
            "isPro": true,
            "name": "Evgesha",
            "avatarUrl": "avatar-evgesha.jpg"
        },
        "isPremium": true,
        "isFavorite": true,
        "rating": 5.0,
        "bedrooms": 2,
        "maxAdults": 4
    },
            
]