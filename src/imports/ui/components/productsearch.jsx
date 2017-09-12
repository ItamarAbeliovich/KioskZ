/**
 * Created by itamar on 03/09/2017.
 */
import React from 'react';

export default ProductSearch = ({query, onChange}) =>
    <input className="form-control product-search" value={query} onChange={onChange} />