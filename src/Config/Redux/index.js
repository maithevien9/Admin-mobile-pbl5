import {createStore, combineReducers} from 'redux';
import resultReducer from './Reducers/ResultReducer';

const reducer = combineReducers({
  result: resultReducer,
});

const store = createStore(reducer);

export default store;
