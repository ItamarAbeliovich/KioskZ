import React from 'react';

export default Cart = ({products, cart, onRemoveProduct, onCheckout}) =>
    <div>
        <div className="list-group cart-list">
            {
                _.chain(cart)
                    .keys()
                    .map((product, index) =>
                        <div className="list-group-item cart-list-item" key={index}>
                            <span>
                                <a href="#" onClick={_ => onRemoveProduct(product)}>
                                    &times;
                                </a>
                                <span className="">
                                    {products[product].name}
                                </span>
                            </span>
                            <span className="badge">
                                {cart[product]}
                            </span>
                        </div>
                    ).value()
            }
        </div>
    </div>