import axios from 'axios'
const baseUrl = '/api/personal'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
//получить список персонала
const getAll = ( params ) => {
  const { gender, ratingFrom, ratingTo, page  } = params
  console.log('params', gender,ratingFrom, ratingTo)
  const request = axios.get(`${baseUrl}?gender=${gender}&page=${page}`)
  return request.then(response => response.data)
}
// get one personal by id
const getById = ( id ) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
//get personal count
const getCount = ( params ) => {
  const { gender, ratingFrom, ratingTo } = params
  console.log('params', gender,ratingFrom, ratingTo)
  const request = axios.get(`${baseUrl}/count?gender=${gender}`)
  return request.then(response => response.data)
}


//add personal to favorite
const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.put(`${baseUrl}/follow/${id}`, newObject, config )
  return request.then(response => response.data)
}

const personalService = {
  getAll,
  update,
  setToken,
  getCount,
  getById
}

export default personalService

