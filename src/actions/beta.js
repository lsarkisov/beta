import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const onSendBetaCodeAction = (payload) => ({
  type: types.BETA_CODE[REQUEST],
  payload,
})
