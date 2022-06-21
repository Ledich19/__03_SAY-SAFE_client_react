import axios from 'axios'
const baseUrl = '/api/personal'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config )
  return request.then(response => response.data)
}

const userService = {
  update,
  setToken,
}

export default userService

