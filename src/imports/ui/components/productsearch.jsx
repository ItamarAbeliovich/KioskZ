/**
 * Created by itamar on 03/09/2017.
 */
import React from 'react';

export default ProductSearch = ({query, onChange}) =>
    <div className="input-group product-search">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-search" />
        </span>
        <input className="form-control" value={query} onChange={onChange} />
    </div>