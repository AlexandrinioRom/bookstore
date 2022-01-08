import axios from "axios"

export const baseURL = 'http://localhost:4000/'
const token = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}`: ''

const $api = axios.create({
  baseURL: baseURL,
  headers: {Authorization: token}
})

$api.interceptors.request.use( config => {
  console.log('interceptors run')
  
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})


export default $api