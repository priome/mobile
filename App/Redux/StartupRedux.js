import { createActions } from 'reduxsauce'
import Reactotron from 'reactotron-react-native'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: ['something', 'somethingelse']
})

export const StartupTypes = Types
export default Creators
