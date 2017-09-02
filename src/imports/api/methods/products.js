/**
 * Created by itamar on 02/09/2017.
 */
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Products from '/imports/api/collections/products';

Meteor.methods({
    'products.insert'({name, imageLink, price}) {
        check({name, imageLink, price}, {
            name: String,
            imageLink: String,
            price: Number
        });

        return Products.insert({name, imageLink, price});
    },

    'products.remove'(id) {
        check(id, String);
        Products.remove({_id: id});
    },
});