import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import ReduxPersist from '../../config/ReduxPersist'
import createStore from './createStore'
import Auth from '../../stacks/Auth'
import MainStack from '../../stacks/Main'
import LoadingScreen from '../../components/LoadingScreen'
import '../../config'
import '../../lib/consolePuts'

const store = createStore()

class App extends Component {
  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }
  render() {
    const { auth, profile } = this.props
    const isLoggedIn = !isEmpty(auth)
    if (!isLoaded(auth)) return <LoadingScreen />
    if (!isLoggedIn) return <Auth />

    return <MainStack />
  }
}

const mapState = ({ firebase }) => ({
  auth: firebase.auth,
  profile: firebase.profile
})

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch({ type: 'STARTUP' })
})

const AppContainer = connect(
  mapState,
  mapDispatchToProps
)(firebaseConnect()(App))

class AppWithStore extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default AppWithStore
