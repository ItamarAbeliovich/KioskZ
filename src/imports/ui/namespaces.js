/**
 * Created by itamar on 13/09/2017.
 */
import { subspaced } from 'react-redux-subspace';

export const
    STOREFRONT  = 'storefront',
    DESK        = 'desk';

export default namespace =>
    subspaced(state => state[namespace], namespace);