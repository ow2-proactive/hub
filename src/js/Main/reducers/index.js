import { combineReducers } from 'redux'
import selectedTag from './selectedTag'
import packages from './packages'

const Main = combineReducers({
    selectedTag,
    packages
});

export default Main;