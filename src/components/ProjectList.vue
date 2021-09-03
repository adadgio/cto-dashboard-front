<template>
    <div id="list">
        <ul>
            <li class="projectList"  v-for="project in projects" :key="project.name">
                <Project :project="project" @click="onclick(project)" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #list {
        width: 40%;
        margin-top: 50px;
    }

    .projectList {
        list-style: none;
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
    methods: {
        onclick(project: Project) {
            this.$emit('showDetail', project)
        },
    },
})
export default class ProjectList extends Vue {

}
</script>
