import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import HomeReducer from '../app/reducers/HomeReducer';

const store = createStore(combineReducers({ HomeReducer }), {}, applyMiddleware(logger, thunk));
export default store;
