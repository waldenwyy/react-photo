import { ADD_PHOTO } from "../actions/cartActions";

const initialState = {
    totalItem: 0,
    totalPrice: 0,
    photos: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            const newPhotos = [...state.photos];
            const locationInCart = newPhotos.findIndex(p => {
                return p.id === action.payload.id && p.size === action.payload.size;
            });

            const price = state.totalPrice + action.payload.price;

            if (locationInCart === -1) {
                newPhotos.push({
                    ...action.payload,
                    quantity: 1
                });
            } else {
                newPhotos[locationInCart].quantity += 1;
            }
            
            return {
                ...state,
                photos: [...newPhotos],
                totalItem: state.totalItem + 1,
                totalPrice: price
            };
        default:
            return state;
    }
};

export default cartReducer;