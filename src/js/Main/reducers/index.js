import { combineReducers } from 'redux'
import selectedTag from './selectedTag'
import packages from './packages'
import selectedDownloadOptions from './selectedDownloadOptions'

const Main = combineReducers({
    selectedTag,
    packages,
    selectedDownloadOptions
});

export default Main;