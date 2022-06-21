import axios from 'axios'
const baseUrl = '/api/users'

const registration = async userData => {
  const response = await axios.post(baseUrl, userData)
  return response.data
}

export default { registration }