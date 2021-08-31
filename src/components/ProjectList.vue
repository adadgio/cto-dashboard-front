<template>
    <div>
        <ul>
            <li v-for="project in projects" :key="project.name">
                <Project :project="project"/>
            </li>
        </ul>
        
    </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import Project from '@/components/Project.vue';
import { Project as ProjectObj } from "@cto-dashboard-model/cto-dashboard-model";


@Options({
    components: {
        Project
    },
    props : {
        projects: {
            type : Array as () => Array<ProjectObj>,
            
        }
    }
})
export default class ProjectList extends Vue {

}
</script>