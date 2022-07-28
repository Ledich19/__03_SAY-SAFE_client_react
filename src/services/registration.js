import axios from 'axios'
const baseUrl = '/api/user/registration'

const registration = async userData => {
  const response = await axios.post(baseUrl, userData)
  return response.data
}

export default { registration }