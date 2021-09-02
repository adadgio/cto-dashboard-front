import { createStore } from 'vuex'
import Axios from 'axios'

const apiUrl = 'http://localhost:3000'
const preloadedToken = localStorage.getItem('token')

const store = createStore({
    state: {
        token: preloadedToken,
        projectlist: [],
        sprintList: [],
        issueList: [],
        error: null,
    },
    getters: {
        // isAuthenticated: (state) => {
        //     return state.token !== null
        // },
    },
    mutations: {
        FETCH_PROJECT(state, project) {
            state.projectlist = project
        },

        FETCH_ISSUE(state, issue) {
            state.issueList = issue
        },

        FETCH_SPRINT(state, sprint) {
            state.sprintList = sprint
        },

        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },

        SET_ERROR(state, error) {
            state.error = error
        },
    },
    actions: {
        async fetchProject({ commit }, sprintid: number) {
            const response = await Axios.get(
                `${apiUrl}/projectList?SprintIds=${sprintid}`,
            )
            commit('FETCH_PROJECT', response.data)
        },
        async fetchSprint({ commit }) {
            const response = await Axios.get(`${apiUrl}/sprintlist`)
            commit('FETCH_SPRINT', response.data)
        },
        async fetchIssue({ commit }, sprintid: number) {
            const response = await Axios.get(`${apiUrl}/issuelist/sprintId=${sprintid}`)
            commit('FETCH_ISSUE', response.data)
        },
        // TODO: typé crédientials
        async login({ commit }, credentials) {
            Axios.post(`${apiUrl}/login`, credentials).then((response) => {
                if (response.status === 200 && response.data) {
                    commit('SET_TOKEN', response.data.token)
                } else {
                    commit('SET_ERROR', 'Invalid login credentials')
                }
            }).catch((e) => {
                commit('SET_ERROR', e.toString())
            })
        },
    },
})

export default store
