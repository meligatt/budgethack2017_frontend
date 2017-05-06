import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import infographics from './infographics';

const rootReducer = combineReducers({
  infographics, routing: routerReducer });

export default rootReducer;
