import { connect } from 'react-redux-meteor';
import { addProductToCart, removeProductFromCart } from '/imports/ui/actions/cart';
import Product from '/imports/ui/components/product.jsx';

const mapStateToProps = (state, props) => ({
    product: props.product,
    quantity: state.storefront.cart[props.product._id] || 0
});

const mapDispatchToProps = (dispatch, props) => ({
    onAddToCart: _ => dispatch(addProductToCart(props.product._id)),
    onRemoveFromCart: _ => dispatch(removeProductFromCart(props.product._id))
});

export default connect(
    null,
    mapStateToProps,
    mapDispatchToProps
)(Product);