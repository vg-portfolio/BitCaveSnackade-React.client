import { combineReducers } from 'redux';
import siteReducer from './site_info_reducer';
import merchReducer from './merch_data_reducer';
// import SearchTerm from './search_term';

const rootReducer = combineReducers({
  siteInfo: siteReducer,
  merchData: merchReducer
});

export default rootReducer;
