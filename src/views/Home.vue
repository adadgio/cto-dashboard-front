<template>
    <div>
        <SprintSelector
            :options="sprints"
        />
        <div class="projectContainer">
            <ProjectList :projects="projects" @click="onProjectClick" />
            <ProjectDetails :projectName="'test'" :issues="issues" />
        </div>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'
import { Sprint } from '@cto-dashboard-model/cto-dashboard-model'
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
        this.$store.dispatch('fetchProjects')
        this.$store.dispatch('fetchIssues') // TODO : mettre la ligne dans onSelectChange
    },
    computed: {
        // projects() {
        //    return this.$store.state.projectlist
        // },
        // issues() {
        //    return this.$store.state.issueList
        // },
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
        onProjectClick() {
            // @todo Open project detailed view
        },
        onSelectChange(e: Sprint) {
            console.log(e)
            this.state.action.fetchProject(e.id)
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
