import { createActions } from 'reduxsauce'
import Reactotron from 'reactotron-react-native'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: ['something', 'somethingelse']
})

Reactotron.log(Types)
Reactotron.log(Creators)

export const StartupTypes = Types
export default Creators
