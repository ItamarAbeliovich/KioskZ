/**
 * Created by itamar on 02/09/2017.
 */
import { Meteor } from 'meteor/meteor';

import Products from '../collections/products';

Meteor.publish('products', () => {
    return Products.find({}, {sort: {name: 1}});
});