import ProductSearch from '../containers/productsearch';
import ProductList from '../containers/productlist';
import React from 'react';

export default Storefront = ({products}) =>
    <div className="container">
        <ProductSearch />
        <ProductList products={products} />
    </div>