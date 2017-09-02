/**
 * Created by itamar on 02/09/2017.
 */
import { Meteor } from 'meteor/meteor';

import Orders from '../collections/orders';

Meteor.publish('orders', () => {
    if (Roles.userIsInRole(this.userId, 'seller'))
        return Orders.find({}, {sort: {createdAt: 1}});
    return Orders.find({buyer: this.userId});
});