import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import LoginScreen from './LoginScreen'
import LoadingScreen from './LoadingScreen'

import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    const { auth } = this.props
    const isLoggedIn = !isEmpty(auth)
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        {!isLoaded(auth) ? <LoadingScreen /> : isLoggedIn
          ? <AppNavigation /> : <LoginScreen {...this.props} />}
      </View>
    )
  }
}

const mapState = ({firebase: { auth }}) => ({
  auth
})

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(
  mapState,
  mapDispatchToProps
)(firebaseConnect()(RootContainer))
