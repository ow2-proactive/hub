import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fetchPackages } from './actions/index'
import MainReducer from './reducers'
import App from './components/App';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

let store = createStore(
    MainReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerHistoryMiddleware
    )
);

store
    .dispatch(fetchPackages())
    .then(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-packages')
);
