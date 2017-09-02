import React from 'react';

export default Product = ({product, quantity, onAddToCart, onRemoveFromCart}) =>
    <div className="panel panel-info">
        <div className="panel-heading">
            {product.name}
        </div>
        <div className="panel-body">
            <img className="img-responsive" src={product.imageLink} />
        </div>
        <div className="panel-footer">
            <div className="col-xs-4">
                {
                    quantity > 0 ?
                        <button className="btn btn-danger" onClick={onRemoveFromCart}>
                            <span className="glyphicon glyphicon-minus" />
                        </button>
                        : null
                }
                &nbsp;
            </div>
            <div className="col-xs-4">
                {
                    quantity > 0 ?
                        <span>
                        {quantity}
                    </span>
                        : null
                }
                &nbsp;
            </div>
            <div className="col-xs-4">
            </div>
            <button className="btn btn-success" onClick={onAddToCart}>
                <span className="glyphicon glyphicon-plus" />
            </button>
        </div>
    </div>