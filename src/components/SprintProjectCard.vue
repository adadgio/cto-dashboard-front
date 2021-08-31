<template>
  <div class="content">
    <h2 class="on-going" v-if="onGoing">En cours</h2>
    <h2 class="done" v-else>Fait</h2>
    <p>11</p>
    <p>11</p>
    <!-- <template v-if="onGoing">
      <SprintIssueContentCard class="features" :nbrFeature="project.nbBugsTodo" issues="features" />
      <SprintIssueContentCard class="bugs" :nbrBug="project.nbFeatureTodo" issues="bugs" />
    </template>
    <template v-else>
      <SprintIssueContentCard class="features" :nbrFeature="project.nbBugsDone" issues="features" />
      <SprintIssueContentCard class="bugs" :nbrBug="project.nbFeatureDone" issues="bugs" />
    </template> -->
  </div>
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
.content {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
.on-going {
  color: white;
 background-color: red;
}
.done {
  color: white;
  background-color: green;
}
.features {

}
.bugs {

}
</style>