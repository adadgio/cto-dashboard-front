<template>
    <div>
        <h2>{{ project.name }}</h2>
        <div>
            <ProjectCard :onGoing="true" :project="project" />
        </div>
        <div>
            <ProjectCard :onGoing="false" :project="project" />
        </div>

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProjectCard from '@/components/SprintProjectCard.vue'

@Options({
    components: {
        ProjectCard,
    },
    props: {
        project: {
            type: Object,
            default() {
                return { }
            },
        },

    },
})
export default class Project extends Vue {

}
</script>
