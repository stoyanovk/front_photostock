import {createStore,applyMiddleware} from 'redux';
import reducers from './Reducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;