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
    width: 45%;
    border-radius: 0.375rem;
    background-color: white;
    box-shadow: 0 0.1875rem 0.5rem black;
    }
    .card:hover {
        background-color: rgba(0, 0, 0, 0.151);
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
