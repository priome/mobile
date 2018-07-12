import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'

export default () => {
  const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    thing: require('./ThingRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
