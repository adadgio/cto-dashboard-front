<template>
    <div>
        <SprintSelector
            :options="sprints"
        />
        <div class="projectContainer">
            <ProjectList :projects="projects" @click="onProjectClick" />
            <transition name="fade">
                <template v-if="displayDetail === true">
                    <ProjectDetails :projectName="'test'" :issues="issues" />
                </template>
            </transition>
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
            displayDetail: false,
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
        this.$store.dispatch('fetchIssues', 1) // TODO : mettre la ligne dans onSelectChange
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
            authorized: (state: any) => {
                return state.authorized
            },
        }),
    },
    methods: {
        onProjectClick() {
            // @todo Open project detailed view
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
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>
