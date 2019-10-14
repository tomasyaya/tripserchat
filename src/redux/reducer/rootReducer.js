import {combineReducers} from 'redux';
import {bookiesReducer} from './bookiesReducer';

export const rootReducer = combineReducers({
  bookies: bookiesReducer,
})