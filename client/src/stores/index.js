import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';

const rootReducers = combineReducers({
  dataProduct: productReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store