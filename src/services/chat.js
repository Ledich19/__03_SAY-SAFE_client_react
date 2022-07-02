import axios from 'axios'
const baseUrl = '/api/chat'
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
  getById,
  create,
  check
}

export default chatService