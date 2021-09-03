import { createStore } from 'vuex'
import Axios, { AxiosError } from 'axios'
import { Issue, Project } from '@cto-dashboard-model/cto-dashboard-model'
// import PROJECTS_MOCKUP from '../mockup/projects.mockup'
// import ISSUES_MOCKUP from '../mockup/issues.mockup'

const apiUrl = ''

const store = createStore({
    state: {
        authorized: true,
        projectlist: [],
        sprintList: [],
        issueList: {
            getBugListTodo: [],
            getBugListDone: [],
            getFeatureListTodo: [],
            getFeatureListDone: [],
        },
        error: null,
    },
    getters: {
    },
    mutations: {
        SET_PROJECTS(state, project) {
            state.projectlist = project
        },

        SET_ISSUES(state, issues) {
            state.issueList.getBugListTodo = issues.filter((issue: Issue) => issue.type === 'Bug' && issue.status === 'Todo')
            state.issueList.getBugListDone = issues.filter((issue: Issue) => issue.type === 'Bug' && issue.status === 'Done')
            state.issueList.getFeatureListTodo = issues.filter((issue: Issue) => issue.type === 'Feature' && issue.status === 'Todo')
            state.issueList.getFeatureListDone = issues.filter((issue: Issue) => issue.type === 'Feature' && issue.status === 'Done')
        },

        SET_SPRINTS(state, sprint) {
            state.sprintList = sprint
        },

        SET_AUTHORIZED(state, isOk: boolean) {
            state.authorized = isOk
        },

        SET_ERROR(state, error) {
            state.error = error
        },
    },
    actions: {
        async fetchProjects({ commit }) {
            const response = await Axios.get<Project[]>(
                `${apiUrl}/projectList`,
            ).catch((e: AxiosError) => {
                if (e.message.includes('401')) {
                    commit('SET_AUTHORIZED', false)
                } else {
                    commit('SET_ERROR', e.toString())
                }
                return null
            })
            if (response && response.data) {
                commit('SET_PROJECT', response.data)
            }

            // @todo Switch this when API is ready!
            // commit('SET_PROJECTS', PROJECTS_MOCKUP)
        },
        async fetchSprints({ commit }, projectIds: string[]) {
            const response = await Axios.get(`${apiUrl}/sprintlist?${projectIds.join()}`)
            commit('SET_SPRINTS', response.data)
        },
        async fetchIssues({ commit }, sprintid: number) {
            const response = await Axios.get<Issue[]>(`${apiUrl}/issuelist/?sprintIds=${sprintid}`)
                .catch((e: AxiosError) => {
                    if (e.code && e.code === '401') {
                        commit('SET_AUTHORIZED', false)
                    } else {
                        commit('SET_ERROR', e.toString())
                    }
                })
            if (response && response.data) {
                commit('SET_ISSUE', response?.data)
            }
            // commit('SET_ISSUES', ISSUES_MOCKUP)
        },
        // TODO: typé crédientials
        async login({ commit }, credentials) {
            Axios.post('/login', credentials).then((response) => {
                if (response.status === 200) {
                    commit('SET_AUTHORIZED', true)
                } else {
                    commit('SET_ERROR', 'Invalid login credentials')
                }
            }).catch((e: AxiosError) => {
                if (e.code && e.code === '401') {
                    commit('SET_AUTHORIZED', false)
                } else {
                    commit('SET_ERROR', e.toString())
                }
            })
        },
    },
})

export default store
