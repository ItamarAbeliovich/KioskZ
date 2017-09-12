/**
 * Created by itamar on 13/09/2017.
 */
import { subspaced } from 'react-redux-subspace';

export const
    bindNamespace = namespace =>
        subspaced(state => state[namespace], namespace);
    STOREFRONT = 'storefront';