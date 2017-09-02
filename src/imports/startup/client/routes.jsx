import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import React from 'react';

// Import needed templates
import App from '/imports/ui/app.jsx';
import Storefront from '/imports/ui/containers/storefront';

// Set up all routes in the app
FlowRouter.route('/store', {
  name: 'App.Store',
  action() {
    mount(App, {content: <Storefront />})
  },
});