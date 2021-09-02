import { createStore } from 'vuex'
import Axios from 'axios'
import PROJECTS_MOCKUP from '../mockup/projects.mockup'
import ISSUES_MOCKUP from '../mockup/issues.mockup'

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
        isAuthenticated: () => {
            return true
            // return state.token !== null
        },
        getBugListTodo(state) {
            // fitler state.iissueList
            console.log(state)
        },
    },
    mutations: {
        SET_PROJECTS(state, project) {
            state.projectlist = project
        },

        SET_ISSUES(state, issue) {
            state.issueList = issue
        },

        SET_SPRINTS(state, sprint) {
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
        async fetchProjects({ commit } /* sprintid: number */) {
            // const response = await Axios.get(
            //    `${apiUrl}/projectList?SprintIds=${sprintid}`,
            // )
            // commit('SET_PROJECT', response.data)

            // @todo Switch this when API is ready!
            commit('SET_PROJECTS', PROJECTS_MOCKUP)
        },
        async fetchSprints({ commit }) {
            const response = await Axios.get(`${apiUrl}/sprintlist`)
            commit('SET_SPRINTS', response.data)
        },
        async fetchIssues({ commit } /* sprintid: number */) {
            // const response = await Axios.get(`${apiUrl}/issuelist/sprintId=${sprintid}`)
            // commit('SET_ISSUE', response.data)
            commit('SET_ISSUES', ISSUES_MOCKUP)
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
