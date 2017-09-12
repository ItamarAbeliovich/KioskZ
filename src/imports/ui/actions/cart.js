/**
 * Created by itamar on 02/09/2017.
 */
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT,
    product
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const clearProduct = (product) => ({
    type: CLEAR_PRODUCT,
    product
});