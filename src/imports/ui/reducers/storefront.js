/**
 * Created by itamar on 02/09/2017.
 */
import { combineReducers } from 'redux';
import cart from './cart';
import { SET_PRODUCT_QUERY } from '/imports/ui/actions/storefront';

const productQuery = (state = '', action) => {
    switch (action.type) {
        case SET_PRODUCT_QUERY:
            return action.query;
        default:
            return state;
    }
};

export default combineReducers({
    productQuery,
    cart
});