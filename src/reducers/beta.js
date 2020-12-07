import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const beta = (state, action) => {
  switch (action.type) {
    case types.BETA_CODE[SUCCESS]:
      return Object.assign({}, state, {
        response: action.payload,
      })

    case types.BETA_CODE[FAILURE]:
    case types.LOG_OUT:
      return Object.assign({}, state, {
        response: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default beta
