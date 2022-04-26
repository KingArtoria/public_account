import axios from 'axios'
const service = axios.create({
  baseURL: 'https://appv41.bdhuoke.com/api',
  timeout: 10000,
  headers: { "Content-Type": 'application/x-www-form-urlencoded' }
})
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
)
export default service