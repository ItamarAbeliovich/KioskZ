/**
 * Created by itamar on 03/09/2017.
 */
import { Meteor } from 'meteor/meteor';
import Products from '/imports/api/collections/products';
import { connect } from 'react-redux-meteor';
import { subspaced } from 'react-redux-subspace';
import Storefront from '../components/storefront.jsx';
import bindNamespace, { STOREFRONT } from '../namespaces';

const mapTrackerToProps = (state, props) => {
    if (Meteor.subscribe('products').ready()) {
        const products = Products.find().fetch();
        const categories = _.pluck(products, 'category');
        return {
            products,
            categories
        };
    }
    return { products: [] };
};

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({});

const subapp = bindNamespace(STOREFRONT)(Storefront);

export default Storefront = connect(
    mapTrackerToProps,
    mapStateToProps,
    mapDispatchToProps
)(subapp);