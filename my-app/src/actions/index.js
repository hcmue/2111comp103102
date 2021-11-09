import * as Types from '../contants/Types';

export const actLoginSuccess = (username, fullname, token) => {
    return {
        type: Types.UserService.LOGIN_SUCCESS,
        payload: {
            "token": token,
            "username": username,
            "fullname": fullname
        }
    }
};

export const actLogout = () => {
    return {
        type: Types.UserService.LOGOUT
    }
};

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.CartService.ADD_TO_CART,
        product,
        quantity
    }
};

export const actUpdateCart = (product, quantity) => {
    return {
        type: Types.CartService.UPDATE_CART,
        product,
        quantity
    }
};

export const actRemoveCart = (product) => {
    return {
        type: Types.CartService.REMOVE_CART,
        product
    }
};

export const actClearCart = () => {
    return {
        type: Types.CartService.CLEAR_CART
    }
};