import axios from 'axios'
const baseUrl = '/api/gialogs'
//get all dialogs
const getAll = () => {
  const request = axios.get(`${baseUrl}`)
  return request.then(response => {
    console.log('dialogs', response)
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

const chatService = {
  getAll,
  getById,
  create,
  check
}

export default chatService