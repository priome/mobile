import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import ReduxPersist from '../../config/ReduxPersist'
import createStore from './createStore'
import Auth from '../../stacks/Auth'
import Main from '../../stacks/Main'
import Onboarding from '../../stacks/Onboarding'
import LoadingScreen from '../../components/LoadingScreen'
import '../../config'
import '../../lib/consolePuts'

const store = createStore()

class App extends Component {
  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }
  profileIsComplete = () => {
    const { profile } = this.props
    return !!profile.birthDate
  }
  render () {
    const { auth } = this.props
    const isLoggedIn = !isEmpty(auth)
    if (!isLoaded(auth)) return <LoadingScreen />
    if (!isLoggedIn) return <Auth />
    if (!this.profileIsComplete()) return <Onboarding />
    return <Main />
  }
}

const mapState = ({ firebase }) => ({
  auth: firebase.auth,
  profile: firebase.profile
})

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch({ type: 'STARTUP' })
})

const AppContainer = connect(mapState, mapDispatchToProps)(
  firebaseConnect()(App)
)

class AppWithStore extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default AppWithStore
