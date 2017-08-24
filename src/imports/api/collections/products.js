/**
 * Created by itamar on 24/08/2017.
 */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export default Products = new Mongo.Collection('products');

let schema = {};

schema.Product = new SimpleSchema({
    name: String,
    imageLink: String,
    price: {
        type: Number,
        min: 0,
        exclusiveMin: true,
    },
});