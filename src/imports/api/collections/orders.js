/**
 * Created by itamar on 24/08/2017.
 */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export default Orders = new Mongo.Collection('orders');

let schema = {};

schema.OrderItem = new SimpleSchema({
    quantity: {
        type: Number,
        min: 1,
        // TODO: Think - do we want max?
    },

    product: SimpleSchema.RegEx.Id
});

schema.Order = new SimpleSchema({
    createdAt: Date,
    products: [schema.OrderItem],
});

Orders.attachSchema(schema.Order);