import { FETCH_CARS } from '../actions';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CARS:
            return action.payload.data
        default:
            return state;
    }
}


// export default function() {
//     return [
//         {
//             _id: "5b7a58f6fb6fc066d4289642",
//             available: "In Dealership",
//             carId: 2,
//             make: "4Matic",
//             model: "GLS - 450",
//             name: "Mercedes Benz",
//             picture: "https://firebasestorage.googleapis.com/v0/b/thandothedev.appspot.com/o/fancycars%2Fmercedes-benz-gls.jpg?alt=media&token=d8f52296-fd2d-4adf-89d2-3be20abc1821"
//         },
//         {
//             _id: "5b7a58d1fb6fc066d428962b",
//             available: "In Dealership",
//             carId: 1,
//             make: "4 Wheel drive",
//             model: "911 Turbo",
//             name: "Porche 911",
//             picture: "https://firebasestorage.googleapis.com/v0/b/thandothedev.appspot.com/o/fancycars%2Fporsche-911.png?alt=media&token=a7b6fb5a-bd06-4a53-a20e-9a0cb243291e"
//         },
//         {
//             _id: "5b7a591afb6fc066d428964e",
//             available: "In Dealership",
//             carId: 3,
//             make: "Sport",
//             model: "GT",
//             name: "Mercedes Benz GT",
//             picture: "https://firebasestorage.googleapis.com/v0/b/thandothedev.appspot.com/o/fancycars%2Fmercedes-gt.jpg?alt=media&token=23f91b9c-1204-4b75-8d5e-1a65c1f62f6c"
//         },
//         {
//             _id: "5b7a5930fb6fc066d428965b",
//             available: "Out of Stock",
//             carId: 4,
//             make: "4 wheel drive",
//             model: "Lancer Evo",
//             name: "Mitsubishi Lancer",
//             picture: "https://firebasestorage.googleapis.com/v0/b/thandothedev.appspot.com/o/fancycars%2Fmitsubishi-lancer.jpg?alt=media&token=ec699aa9-1ffb-4708-99f7-7cc166c30eae"
//         }
//     ]
// }