import { combineReducers } from 'redux';
import loadListReducer from './loadListReducer'
export default combineReducers({
    loadList: loadListReducer
})
