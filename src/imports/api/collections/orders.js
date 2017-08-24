/**
 * Created by itamar on 24/08/2017.
 */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export default Orders = new Mongo.Collection('orders');