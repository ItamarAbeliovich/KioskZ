import { Provider } from 'react-redux-meteor';
import { createStore } from 'redux';
import app from './reducers/app';
import Storefront from './containers/storefront';
import React from 'react';

let store = createStore(
    app,
    /* initialState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default App = ({content}) =>
    <Provider store={store}>
        {content}
    </Provider>