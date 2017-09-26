import { combineReducers } from 'redux'
import selectedTag from './selectedTag'
import searchTerm from './searchUpdated'
import packages from './packages'
import selectedDownloadOptions from './selectedDownloadOptions'

const Main = combineReducers({
    selectedTag,
    searchTerm,
    packages,
    selectedDownloadOptions
});

export default Main;
