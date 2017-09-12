import ProductSearch from '../containers/productsearch';
import ProductList from '../containers/productlist';
import React from 'react';

export default Storefront = ({products, categories}) =>
    <div className="container">
        <div className="row product-filter-bar">
            <div className="col-xs-12 col-sm-4">
                <ProductSearch />
            </div>
        </div>
        <ProductList products={products} />
    </div>