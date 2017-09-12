/**
 * Created by itamar on 02/09/2017.
 */
const SET_PRODUCT_QUERY = 'SET_PRODUCT_QUERY';

export const setProductQuery = (query) => ({
    type: SET_PRODUCT_QUERY,
    query
});