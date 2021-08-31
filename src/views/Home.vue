<template>
    <div class="home">
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
import ProjectList from '@/components/ProjectList.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

@Options({
    components: {
        ProjectList,
        ProjectDetails
    },
    data() {
        return {}
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
