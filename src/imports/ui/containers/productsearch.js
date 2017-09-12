/**
 * Created by itamar on 03/09/2017.
 */
import { connect } from 'react-redux-meteor';
import ProductSearch from '../components/productsearch.jsx';
import { setProductQuery } from '../actions/storefront.js';

const mapStateToProps = (state, props) => ({
    query: state.productQuery
});

const mapDispatchToProps = (dispatch, props) => ({
    onChange: (e) => dispatch(setProductQuery(e.target.value))
});

export default ProductSearch = connect(
    null,
    mapStateToProps,
    mapDispatchToProps
)(ProductSearch);