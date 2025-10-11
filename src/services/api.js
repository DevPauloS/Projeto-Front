import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-back-git-main-devpaulos-projects-6099a8f9.vercel.app'
})

export default api