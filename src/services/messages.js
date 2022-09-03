import axios from 'axios'
const baseUrl = '/api/message'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

//post message
const create = (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.post(`${baseUrl}`, newObject, config)
  return request.then(response => response.data)
}

//check new message
const check = () => {
  const request = axios.get(`${baseUrl}/check`)
  return request.then(response => response.data)
}

const messageService = {
  setToken,
  create,
  check
}

export default messageService