import axios from 'axios'
const baseUrl = '/api/peoples'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config )
  return request.then(response => response.data)
}

const peoplesService = {
  getAll,
  update,
  setToken
}

export default peoplesService

