import {combineReducers} from 'redux'
import listReducer from './listReducer'


const reducers = combineReducers({
    modList : listReducer
})

export default reducers