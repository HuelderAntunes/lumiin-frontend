import axios from 'axios'

let baseURL = 'https://api.lumiin.app'

if(process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080'
}

const api = axios.create({
  baseURL
})

export default api
