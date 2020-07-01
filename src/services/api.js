import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  timeout: 10000
})

export function authBack() {
  return api
    .get('/auth')
    .then(result => result)
}

export function authFront() {
  return api
    .get('https://github.com/login/oauth/authorize')
    .then(result => result)
}
