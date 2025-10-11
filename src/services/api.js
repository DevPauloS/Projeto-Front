import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-back-bay.vercel.app'
})

export default api