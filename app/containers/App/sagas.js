import { takeLatest } from 'redux-saga/effects'

export default function * root () {
  yield [
    takeLatest('STARTUP', startup)
  ]
}

function * startup () {
  console.log('startup saga called')
}
