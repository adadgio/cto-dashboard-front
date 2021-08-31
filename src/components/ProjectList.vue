<template>
    <div id="list">
        <ul>
            <li v-for="project in projects" :key="project.name">
                <Project :project="project"/>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #list {
        width: 40%;
        margin-top: 50px;
    }
</style>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { Project as ProjectObj } from '@cto-dashboard-model/cto-dashboard-model'
import Project from '@/components/Project.vue'

@Options({
    components: {
        Project,
    },
    props: {
        projects: {
            type: Array as () => Array<ProjectObj>,
        },
    },
})
export default class ProjectList extends Vue {

}
</script>
