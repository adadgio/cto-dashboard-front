<template>
    <div>
        <h2>{{ project.name }}</h2>
        <div>
            module à théthé fait
        </div>
        <div>
            module à théthé en cours
        </div>

        
    </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        project :{
            type: Object,
            default: function () {
                return {    }
            }
        }
      
    },
})
export default class Project extends Vue {

}
</script>