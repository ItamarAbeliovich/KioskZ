/**
 * Created by itamar on 02/09/2017.
 */
import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCT, CLEAR_CART } from '/imports/ui/actions/cart';

export default cart = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state,
                {[action.product]: 1 + (state[action.product] || 0)});
        case REMOVE_PRODUCT:
            if (state[action.product] === 1)
                return Object.assign({}, state,
                    {[action.product]: undefined});

            return Object.assign({}, state,
                {[action.product]: (state[action.product]) - 1});
        case CLEAR_CART:
            return {};
        case CLEAR_PRODUCT:
            return Object.assign({}, state,
                {[action.product]: undefined});
        default:
            return state;
    }
};