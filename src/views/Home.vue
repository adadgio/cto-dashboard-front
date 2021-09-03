<template>
    <div>
        <SprintSelector
            :options="sprints"
        />
        <div class="projectContainer">
            <ProjectList :projects="projects" @showDetail="showDetail2" />
            <template v-if="displayDetail === true">
                <ProjectDetails :project="currentProject" :issues="currentProjectIssueList" />
            </template>
        </div>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'
import { Issue, Project, Sprint } from '@cto-dashboard-model/cto-dashboard-model'
import ProjectList from '@/components/ProjectList.vue'
import SprintSelector from '@/components/SprintSelector.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

@Options({
    components: {
        ProjectList,
        SprintSelector,
        ProjectDetails,
    },
    data() {
        return {
            displayDetail: false,
            currentProject: null,
            currentProjectIssueList: [],
            sprints: [
                {
                    id: 1, name: 'Sprint 1', checked: false,
                },
                {
                    id: 2, name: 'Sprint 2', checked: false,
                },
            ],
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects') // TODO : mettre la ligne dans onSelectChange
        this.$store.dispatch('fetchIssues') // TODO : mettre la ligne dans onSelectChange
    },
    computed: {
        ...mapState({
            projects: (state: any) => {
                return state.projectlist
            },
            issues: (state: any) => {
                return state.issueList
            },
        }),
    },
    methods: {
        showDetail2(project: Project) {
            this.currentProject = project
            this.currentProjectIssueList = this.$store.state.issueList.filter((issue: Issue) => issue.projectId === project.id)
            this.displayDetail = !this.displayDetail
        },
        onSelectChange(e: Sprint) {
            console.log(e)
        },
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
    .projectContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 15px;
    }
</style>
