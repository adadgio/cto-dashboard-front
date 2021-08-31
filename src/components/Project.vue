<template>
    <div>
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
        background-color: white;
    }
    .card:hover {
        background-color: rgb(199, 159, 159);
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
