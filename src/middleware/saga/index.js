import { all } from 'redux-saga/effects'
import { betaCodeRequest } from 'middleware/saga/beta'

export default function* rootSaga() {
  yield all([betaCodeRequest()])
}