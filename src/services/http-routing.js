import http from './http-common'

const getPage = id => {
    return http.get(`/users?page=${ id }`)
}

const getUsers = () => {
    return http.get('/users')
}

const getUser = id => {
    return http.get(`/users/${ id }`)
}

const getPositions = () => {
    return http.get('/positions')
}

const createUser = data => {
    return http.post('/users', data)
}

export default {
    getPage,
    getUser,
    getUsers,
    getPositions,

    createUser,
}