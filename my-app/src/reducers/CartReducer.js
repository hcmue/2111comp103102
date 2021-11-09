import * as Types from '../contants/Types';

const initCartState = []; //có thể lấy từ localStorage

export const cartReducer = (state = initCartState, action) => {
    switch (action.type) {
        case Types.CartService.ADD_TO_CART:
            break;

        case Types.CartService.UPDATE_CART:
            break;

        default: return state;
    }
};