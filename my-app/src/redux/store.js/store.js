import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from '../reducers/auth.reducer'
import homereducer from '../reducers/homeage.reducer'


 const rootReducer=combineReducers({
    auth:authReducer,
    homepagedata:homereducer
 })

const store=createStore(
    rootReducer,{}, composeWithDevTools(applyMiddleware(thunk))
)
export default store