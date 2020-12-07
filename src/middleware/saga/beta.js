import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import { beta } from 'services/api'

function* betaCodeSuccess(data) {
  // const payload = yield call(() => beta(data.payload))

  let payload;

  if (data.payload.code === 'my_secret_code') {
    payload = {
      success: 'ok'
    }
  } else {
    payload = {
      error: 'Wrong code. please try again'
    }
  }

  try {
    yield put({ type: types.BETA_CODE[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.BETA_CODE[FAILURE], error })
  }
}

export function* betaCodeRequest() {
  yield takeEvery(types.BETA_CODE[REQUEST], betaCodeSuccess)
}
