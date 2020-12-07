import { API_URL } from 'const/api'

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function callApi(endpoint, headers) {
  return fetch(`${API_URL}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* Beta
----------------------------------------*/
export const beta = (body) => callApi('/api/v1/beta/code', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});
