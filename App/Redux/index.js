import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation: require('./NavigationRedux').reducer,
    login: require('./LoginRedux').reducer,
    firebase: firebaseStateReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
