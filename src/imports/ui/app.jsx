import { Provider } from 'react-redux-meteor';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers/app';
import Storefront from './containers/storefront';
import React from 'react';
import Main from './layouts/main.jsx';

let store = createStore(
    app,
    /* initialState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default App = ({content}) =>
    <Provider store={store}>
        <Main>
            {content}
        </Main>
    </Provider>