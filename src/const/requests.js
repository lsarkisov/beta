import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/* Constants
----------------------------------------*/
export const BETA_CODE = createRequestTypes('BETA_CODE')
export const LOG_OUT = 'LOG_OUT'
