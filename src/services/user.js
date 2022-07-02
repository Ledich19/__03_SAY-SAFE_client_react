import axios from 'axios'
const baseUrl = '/api/user'

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

//edd follower
const follow = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.put(`${baseUrl}/follow/${id}`, newObject, config )
  return request.then(response => response.data)

}

const userService = {
  update,
  setToken,
  follow
}

export default userService

