import axiosInstance from './index'

const axios = axiosInstance

export const getEvent = () => {
  return axios.get(`http://localhost:8000/api/timeimprint/`)
}

export const postEvent = (content) => {
  return axios.post(`http://localhost:8000/api/timeimprint/`, {'event_content': content})
}
