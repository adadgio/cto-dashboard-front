<template>
    <div class="content">
        <div class="on-going" v-if="onGoing">
            <p class="Label">En cours</p>
        </div>
        <div class="done" v-else>
            <p class="Label">Fait</p>
        </div>

        <SprintIssueContentCard v-if="onGoing" class="features" :nbrFeature="project.nbFeatureTodo" :nbrBug="project.nbBugsTodo" />
        <SprintIssueContentCard v-else class="features" :nbrFeature="project.nbFeatureDone" :nbrBug="project.nbBugsDone" />
    </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { Options, Vue } from 'vue-class-component'
import { Project } from '@cto-dashboard-model/cto-dashboard-model'
import SprintIssueContentCard from '@/components/SprintIssueContentCard.vue'

@Options({
    components: {
        SprintIssueContentCard,
    },
    props: {
        onGoing: Boolean,
        project: {
            type: Object as PropType<Project>,
            required: true,
        },
    },
})
export default class SprintProjectCard extends Vue {}
</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
      border-radius: 0.375rem;

}
.on-going {
    color: white;
    background-color:cornflowerblue;
    display: flex;
    justify-content: center;
    height: 30px;
     border-radius: 0.375rem;
}
.done {
    color: white;
    background-color: green;
    display: flex;
    justify-content: center;
    height: 30px;
     border-radius: 0.375rem;
}
.Label {
    margin: 0px;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: bold;
}
</style>
