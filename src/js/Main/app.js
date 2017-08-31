import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fetchPackages } from './actions/index'
import Main from './reducers'
import App from './components/App';

const loggerMiddleware = createLogger();

let store = createStore(
    Main,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store
    .dispatch(fetchPackages())
    .then(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('react-packages')
);

// const state_architecture = {
//     query: "a query",
//     selectedTag: "a tag",
//     packages.js: {
//         isFetching: true,
//         receivedAt: 123456
//         items: [
//             {
//                 "name": "a name",
//                 "short_description": "a short description",
//                 "author": "an author",
//                 "tags": ["Basics", "Finance", "Monte Carlo"],
//                 "repo_url": "https://github.com/StackStorm-Exchange/web",
//                 "version": "0.0.1",
//                 "content": {
//                     "workflows": {
//                         "count": 2
//                     },
//                     "dockerfile": {
//                         "count": 1
//                     },
//                     "jar": {
//                         "count": 2
//                     },
//                     "other_files": {
//                         "count": 1
//                     }
//                 }
//             }
//         ]
//     }
// };