import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'react-native-firebase'
import createSagaMiddleware from 'redux-saga'
import Config from '../../config/DebugConfig'
import RehydrationServices from '../../services/RehydrationServices'
import ReduxPersist from '../../config/ReduxPersist'
import reducers from './reducers'
import sagas from './sagas'

export default () => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  /* ------------- Firebase ------------- */
  enhancers.push(
    reactReduxFirebase(firebase.app(), {
      userProfile: 'users',
      enableRedirectHandling: false,
      useFirestoreForProfile: true
    })
  )

  // Redux DevTools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // Reactotron
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore

  const store = createAppropriateStore(reducers, composeEnhancers(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  sagaMiddleware.run(sagas)

  return store
}
