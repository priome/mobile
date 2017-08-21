import { put, select } from 'redux-saga/effects'
import ThingActions from '../Redux/ThingRedux'
import { is } from 'ramda'
import { getFirebase } from 'react-redux-firebase';

export const selectThing = (state) => state.thing.data

export function* startup(action) {

  // Thing

  const thing = yield select(selectThing)

  if (!is(String, thing)) {
    yield put(ThingActions.thingRequest(123))
  }

  // Auth

  const fire = yield getFirebase();

  if (fire.auth().authenticated) {
    //console.tron.log('Logged in')
  } {
    //console.tron.log('Not logged in')
  }

}
