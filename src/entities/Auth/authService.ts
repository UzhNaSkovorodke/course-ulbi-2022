import axios from 'axios'

const getAccessToken = (userId: number, refreshToken: string) => {
  return axios.post(`http://localhost:4998/refresh`, {
    userId: userId,
    refreshToken: refreshToken,
  })
}
export { getAccessToken }
