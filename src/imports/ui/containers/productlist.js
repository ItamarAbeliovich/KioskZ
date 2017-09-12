/**
 * Created by itamar on 03/09/2017.
 */
import { connect } from 'react-redux-meteor';
import ProductList from '../components/productlist.jsx';

const mapStateToProps = (state, props) => ({
    products: _.filter(props.products,
        (product) => product.name.toLowerCase().includes(state.productQuery.trim().toLowerCase()))
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    null,
    mapStateToProps,
    mapDispatchToProps
)(ProductList);