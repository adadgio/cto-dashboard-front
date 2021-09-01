<template>
    <div class="project">
        <h2>{{ project.name }}</h2>
        <div id="project-cards">
            <div class="card">
                <ProjectCard :onGoing="true" :project="project" />
            </div>
            <div class="card">
                <ProjectCard :onGoing="false" :project="project" />
            </div>
        </div>
    </div>
</template>
<style scoped>
    #project-cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card {
        width: 40%;
    }

    .project {
        border-radius: 10px;
        padding: 5px;
    }

    .project:hover {
        background-color: #e7e7e7;
        transition: background-color 200ms ease-in-out;
    }

</style>
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
