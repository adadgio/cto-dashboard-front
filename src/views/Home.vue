<template>
    <div class="home">
        <ProjectList :projects="[
            {
                'name': 'Projet de test 1',
                'nbBugsTodo': '2',
                'nbBugsDone': '3',
                'nbFeatureTodo': '1',
                'nbFeatureDone': '4',
            },
            {
                'name': 'Projet de test 2',
                'nbBugsTodo': '4',
                'nbBugsDone': '6',
                'nbFeatureTodo': '0',
                'nbFeatureDone': '7',
            }
        ]" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProjectList from '@/components/ProjectList.vue'

@Options({
    components: {
        ProjectList,
    },
    data() {
        return {}
    },
})
export default class Home extends Vue {}
</script>
