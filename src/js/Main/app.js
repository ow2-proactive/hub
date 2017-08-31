import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fetchTxProjects, fetchLinksOrgProj, fetchLiltProjects } from './actions/index'
import OrganizationToProjectManager from './reducers'
import App from './components/App';

const loggerMiddleware = createLogger();

let store = createStore(
    OrganizationToProjectManager,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// store
//     .dispatch(fetchTxProjects())
//     .then(() => console.log(store.getState()));

const packageList = [];

ReactDOM.render(
<Provider store={store} >
    <App packageList={packageList} />
</Provider>,
document.getElementById('react-packages')
);