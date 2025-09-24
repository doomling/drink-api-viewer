import axios from 'axios'

const isDev = import.meta.env.DEV
const devBase = '/api'
const api = axios.create({
  baseURL: isDev ? devBase : (import.meta.env.VITE_DRINK_API_BASE_URL || 'http://localhost:3000'),
  timeout: 10000,
})

export default api


