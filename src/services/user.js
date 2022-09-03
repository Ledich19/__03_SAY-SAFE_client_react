import axios from 'axios'
const baseUrl = '/api/user'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

//получить все даные юзера
const getMe = () => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(`${baseUrl}/me`, config)
  return request.then(response => response.data)
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

//верификация по имейл
const verify = (hash) => {
  const request = axios.get(`${baseUrl}/verify?hash=${hash}`)
  return request.then(response => response.data)
}

const userService = {
  getMe,
  update,
  setToken,
  follow,
  verify
}

export default userService

