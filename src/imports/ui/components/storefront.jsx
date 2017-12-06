import ProductSearch from '../containers/productsearch';
import ProductList from '../containers/productlist';
import ConfirmationModal from './confirmationmodal.jsx';
import Cart from '../containers/cart';
import React from 'react';

export default Storefront = ({products, categories}) =>
    <div className="">
        <ConfirmationModal
            id="checkoutModal"
            header="אישור קנייה"
            >
            <Cart products={products} />
        </ConfirmationModal>
        <div className="row product-filter-bar">
            <div className="col-xs-9 col-sm-6 col-sm-offset-3">
                <ProductSearch />
            </div>
            <button className="btn btn-success col-xs-3"
                    data-toggle="modal"
                    data-target="#checkoutModal">
                {"אישור קנייה"}
                &nbsp;
                <span className="glyphicon glyphicon-shopping-cart" />
            </button>
        </div>
        <br />
        <ProductList products={products} />
    </div>