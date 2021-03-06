/**
 * Created by itamar on 03/09/2017.
 */
import { combineReducers } from 'redux';
import { namespaced } from 'redux-subspace';
import storefront from './storefront';
import { STOREFRONT, DESK } from '../namespaces';

export default app = combineReducers({
    storefront: namespaced(STOREFRONT)(storefront),
    desk: namespaced(DESK)(storefront)
});