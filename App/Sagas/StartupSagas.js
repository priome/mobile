import { put, select } from 'redux-saga/effects'
import ThingActions from '../Redux/ThingRedux'
import { is } from 'ramda'

// exported to make available for tests
export const selectThing = (state) => state.thing.data

// process STARTUP actions
export function* startup(action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectThing
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectThing
      }
    })
  }
  const thing = yield select(selectThing)

  // fetch thing if not present
  if (!is(String, thing)) {
    yield put(ThingActions.thingRequest(123))
  }
}
