<template>
    <div>
        <SprintSelector
            :options="sprints"
        />
        <div class="projectContainer">
            <ProjectList :projects="[
                {
                    'name': 'Projet de test 1',
                    'nbBugsTodo': 2,
                    'nbBugsDone': 3,
                    'nbFeatureTodo': 1,
                    'nbFeatureDone': 4,
                },
                {
                    'name': 'Projet de test 2',
                    'nbBugsTodo': 4,
                    'nbBugsDone': 6,
                    'nbFeatureTodo': 0,
                    'nbFeatureDone': 7,
                }
            ]" @click="onClick" />
            <ProjectDetails :projectName="'test'" :issues="[
                {
                    'id': 1,
                    'boardId': 2,
                    'name': 'azelmkjhvgcfvjbk scdcz czzeczecez czecezcze cezcezczecez cezczeczec ezcezcezcezc cezczecezc',
                    'type': 'Bug',
                    'status': 'Done'
                },
                {
                    'id': 2,
                    'boardId': 3,
                    'name': 'hd',
                    'type': 'Bug',
                    'status': 'Todo'
                },
                {
                    'id': 3,
                    'boardId': 4,
                    'name': 'ikyth',
                    'type': 'Feature',
                    'status': 'Done'
                },
                {
                    'id': 1,
                    'boardId': 2,
                    'name': 'rtb',
                    'type': 'Bug',
                    'status': 'Done'
                },
                {
                    'id': 2,
                    'boardId': 3,
                    'name': 'ce',
                    'type': 'Bug',
                    'status': 'Todo'
                },
                {
                    'id': 3,
                    'boardId': 4,
                    'name': 'vgb',
                    'type': 'Feature',
                    'status': 'Done'
                },
                {
                    'id': 1,
                    'boardId': 2,
                    'name': 'azert',
                    'type': 'Bug',
                    'status': 'Done'
                },
                {
                    'id': 2,
                    'boardId': 3,
                    'name': 'azert2',
                    'type': 'Bug',
                    'status': 'Todo'
                },
                {
                    'id': 3,
                    'boardId': 4,
                    'name': 'azert3',
                    'type': 'Feature',
                    'status': 'Done'
                },
                {
                    'id': 1,
                    'boardId': 2,
                    'name': 'azert',
                    'type': 'Bug',
                    'status': 'Done'
                },
                {
                    'id': 2,
                    'boardId': 3,
                    'name': 'azert2',
                    'type': 'Bug',
                    'status': 'Todo'
                },
                {
                    'id': 3,
                    'boardId': 4,
                    'name': 'azert3',
                    'type': 'Feature',
                    'status': 'Done'
                },
                {
                    'id': 1,
                    'boardId': 2,
                    'name': 'azert',
                    'type': 'Bug',
                    'status': 'Done'
                },
                {
                    'id': 2,
                    'boardId': 3,
                    'name': 'azert2',
                    'type': 'Bug',
                    'status': 'Todo'
                },
                {
                    'id': 3,
                    'boardId': 4,
                    'name': 'azert3',
                    'type': 'Feature',
                    'status': 'Done'
                },
                {
                    'id': 4,
                    'boardId': 7,
                    'name': 'azert4',
                    'type': 'Feature',
                    'status': 'Todo'
                }
            ]" />
        </div>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
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
    computed: {
        project() {
            return this.store.state.projectlist
        },
        issue() {
            return this.store.state.issueList
        },
    },
    methods: {
        onSelectChange(e: Sprint) {
            console.log(e)
            this.state.action.fetchProject(e.id)
            this.state.action.fetchIssue(e.id)
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
