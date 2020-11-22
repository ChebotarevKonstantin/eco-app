import { combineReducers } from 'redux';
import {findAdressReducer} from './findAdressReducer';

export const rootReducer = combineReducers({
  adress:findAdressReducer,
})
