import { connect } from 'react-redux-meteor';
import Cart from '../components/cart.jsx';
import { clearProduct } from '/imports/ui/actions/cart';

const mapStateToProps = (state, props) => ({
    products: _.indexBy(props.products, '_id'),
    cart: state.cart
});

const mapDispatchToProps = (dispatch, props) => ({
    onRemoveProduct: (product) => {
        dispatch(clearProduct(product));
    }
});

export default connect(
    null,
    mapStateToProps,
    mapDispatchToProps
)(Cart);