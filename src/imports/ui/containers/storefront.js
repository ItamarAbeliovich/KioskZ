/**
 * Created by itamar on 03/09/2017.
 */
import { Meteor } from 'meteor/meteor';
import Products from '/imports/api/collections/products';
import { connect } from 'react-redux-meteor';
import Storefront from '../components/storefront.jsx';

const mapTrackerToProps = (state, props) => {
    if (Meteor.subscribe('products').ready()) {
        return { products: Products.find().fetch() };
    }
    return { products: [] };
};

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default Storefront = connect(
    mapTrackerToProps,
    mapStateToProps,
    mapDispatchToProps
)(Storefront);