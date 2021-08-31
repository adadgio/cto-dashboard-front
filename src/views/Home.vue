<template>
    <div class="home">
        <SprintSelector
            :options="sprints"
            @onChange="onSelectChange"
        />
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
        ]" />
        <ProjectDetails :projectName="'test'" :issues="[
            {
                'id': 1,
                'name': 'azert',
                'type': 'Bug',
                'status': 'Done'
            },
            {
                'id': 2,
                'name': 'azert2',
                'type': 'Bug',
                'status': 'Todo'
            },
            {
                'id': 3,
                'name': 'azert3',
                'type': 'Feature',
                'status': 'Done'
            },
            {
                'id': 4,
                'name': 'azert4',
                'type': 'Feature',
                'status': 'Todo'
            },
            
        ]" />
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Sprint } from '@cto-dashboard-model/cto-dashboard-model'
import ProjectList from '@/components/ProjectList.vue'
import SprintSelector from '@/components/SprintSelector.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

export interface SprintSelectorEvent {
    selection: Array<Sprint>
}
@Options({
    components: {
        ProjectList,
        SprintSelector,
        ProjectDetails
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
    methods: {
        onSelectChange(e: SprintSelectorEvent) {
            console.log(e)
        },
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: row;
    }
</style>
