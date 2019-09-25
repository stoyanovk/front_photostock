import {createStore} from 'redux';
import UserReducer from './Reducer';
let store = createStore(UserReducer);
export default store;