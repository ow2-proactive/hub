import { combineReducers } from 'redux'
import searchTerm from './searchUpdated'
import packages from './packages'
import selectedDownloadOptions from './selectedDownloadOptions'
import { routerReducer } from 'react-router-redux'

const Main = combineReducers({
    router: routerReducer,
    searchTerm,
    packages,
    selectedDownloadOptions
});

export default Main;
