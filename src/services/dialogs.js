import axios from 'axios'
const baseUrl = '/api/dialogs'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

//get all dialogs
const getAll = () => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(`${baseUrl}`,config)
  return request.then(response => {
    return  response.data})
}

//get all messages by dialod id
const getAllMessagesByID = (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(`${baseUrl}/${id}`, config)
  return request.then(response => {
    return  response.data})
}


//get chat
const getById = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
//post message
const create = (id,newObject) => {
  const request = axios.post(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

//check new message
const check = () => {
  const request = axios.get(`${baseUrl}/check`)
  return request.then(response => response.data)
}

const dialogsService = {
  getAllMessagesByID,
  setToken,
  getAll,
  getById,
  create,
  check
}

export default dialogsService