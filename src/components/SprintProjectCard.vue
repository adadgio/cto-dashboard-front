<template>
  <template v-if="onGoing">
    <h2 class="on-going" v-if="onGoing">En cours</h2>
    <SprintIssueContentCard class="features" :nbrFeature="project.nbBugsTodo" issues="features" />
    <SprintIssueContentCard class="bugs" :nbrBug="project.nbFeatureTodo" issues="bugs" />
  </template>

  <template v-else>
    <h2 class="done">Fait</h2>
    <SprintIssueContentCard class="features" :nbrFeature="project.nbBugsDone" issues="features" />
    <SprintIssueContentCard class="bugs" :nbrBug="project.nbFeatureDone" issues="bugs" />
  </template>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { Options, Vue } from 'vue-class-component';
import { Project } from '@cto-dashboard-model/cto-dashboard-model';

@Options({
  props: {
    onGoing: Boolean,
    project: {
      type: Object as PropType<Project>,
      required: true,
    }
  },
  data: () => {
    return {

    }
  },
})
export default class SprintProjectCard extends Vue {}
</script>

<style scoped lang="scss">
.on-going {
 background-color: 'red';
}
.done {
  background-color: 'green';
}
.features {

}
.bugs {

}
</style>