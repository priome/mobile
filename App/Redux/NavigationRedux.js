import { NavigationActions } from 'react-navigation'
import { PrimaryNav } from '../Navigation/AppNavigation'
import { actionTypes } from 'react-redux-firebase';
const { navigate, reset } = NavigationActions
const { getStateForAction } = PrimaryNav.router

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: 'LoadingScreen' })
)
const NOT_LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: 'NotLoggedInStack' })
  ]
}))
const LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: 'LoggedInStack' })
  ]
}))

export function reducer(state = INITIAL_STATE, action) {
  let nextState
  switch (action.type) {
    case actionTypes.LOGOUT:
      return NOT_LOGGED_IN_STATE
  }
  nextState = getStateForAction(action, state)
  return nextState || state
}