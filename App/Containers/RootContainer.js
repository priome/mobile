import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from '../Navigation/AppNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import { firebaseConnect } from 'react-redux-firebase'

import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(firebaseConnect()(RootContainer));