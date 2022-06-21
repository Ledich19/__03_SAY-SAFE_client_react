import axios from 'axios'
const baseUrl = '/api/personal'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = ( params ) => {
  const { gender, ratingFrom, ratingTo, page  } = params
  console.log('params', gender,ratingFrom, ratingTo)
  const request = axios.get(`${baseUrl}?gender=${gender}&page=${page}`)
  return request.then(response => response.data)
}

const getCount = ( params ) => {
  const { gender, ratingFrom, ratingTo } = params
  console.log('params', gender,ratingFrom, ratingTo)
  const request = axios.get(`${baseUrl}/count?gender=${gender}`)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config )
  return request.then(response => response.data)
}

const personalService = {
  getAll,
  update,
  setToken,
  getCount
}

export default personalService

