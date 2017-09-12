import React from 'react';

export default Product = ({product, quantity, onAddToCart, onRemoveFromCart}) =>
    <div className="panel panel-info product-card">
        <div className="panel-heading product-title">
            <h4 className="product-price">
                &#8362;{product.price}
            </h4>
            <h4 className="product-name">
                {product.name}
            </h4>
        </div>
        <div className="panel-body">
            <img className="img-responsive" src={product.imageLink} />
        </div>
        <div className="panel-footer">
            {
                quantity > 0 ?
                        <span className="badge pull-left">
                            {quantity}
                        </span>
                    : null
            }
            <div className="btn-group pull-right product-buttons">
                {
                    quantity > 0 ?
                        <button className="btn btn-danger btn-sm" onClick={onRemoveFromCart}>
                            <span className="glyphicon glyphicon-minus" />
                        </button>
                        : null
                }
                <button className="btn btn-success btn-sm" onClick={onAddToCart}>
                    <span className="glyphicon glyphicon-plus" />
                </button>
            </div>
            &nbsp;
        </div>
    </div>