import axios, { AxiosResponse } from 'axios'
import store from './store'

axios.interceptors.request.use((config) => {
    // Ajoute le bearer si il existe en base.
    if (localStorage.getItem('token')) {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }
    return config
})

axios.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: Error) => {
    // Si la session est expiré/invalidé (token) => Le supprime de la base, il faudra se reconnecter.
    if (error.name === 'TokenExpiredError') {
        // Todo: add TokenExpiredError
        localStorage.removeItem('token')
        store.commit('CHANGE_USER', null)
    }
})
