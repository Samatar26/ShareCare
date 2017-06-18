import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './AuthReducer';
import homeOwnerReducer from './HomeOwnerReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  homeOwners: homeOwnerReducer,
});

export default rootReducer;
