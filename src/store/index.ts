import { createStore } from 'vuex'
import Axios from 'axios'

const apiUrl = 'localhost:3000'

export default createStore({
    state: {
        user: null,
        projectlist: [],
        sprintList: [],
        issueList: [],
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

        CHANGE_USER(state, user) {
            state.user = user
        },
    },

    actions: {
        async fetchProject({ commit }, sprintid: number) {
            const response = await Axios.get(
                `${apiUrl}/projectList?SprintsIds=${sprintid}`,
            )
            commit('FETCH_PROJECT', response.data)
        },
        async fetchSprint({ commit }) {
            const response = await Axios.get(`${apiUrl}/sprintlist`)
            commit('FETCH_SPRINT', response.data)
        },
        async fetchIssue({ commit }) {
            const response = await Axios.get(`${apiUrl}/issuelist`)
            commit('FETCH_ISSUE', response.data)
        },
        // TODO: typé crédientials
        async login({ commit }, credentials) {
            const response = await Axios.post(`${apiUrl}/login`, credentials)
            localStorage.setItem('token', response.data.token)
            commit('CHANGE_USER', credentials.username)
        },
    },
})
