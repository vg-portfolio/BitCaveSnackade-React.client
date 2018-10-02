import { combineReducers } from 'redux';
import siteReducer from './site_info_reducer';
// import SearchTerm from './search_term';

const rootReducer = combineReducers({
  siteInfo: siteReducer
});

export default rootReducer;
