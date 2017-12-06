import React from 'react';
import Product from '/imports/ui/containers/product';
import Cart from '/imports/ui/containers/cart';

export default ProductList = ({products}) =>
    <div>
        <div className="row">
            {_.map(products, (product) =>
                <div className="col-xs-12 col-sm-4 col-md-3" key={product._id}>
                    <Product product={product} />
                </div>
            )}
        </div>
    </div>