<template>
  <div class="content">
    <h2 class="on-going" v-if="onGoing">En cours</h2>
    <h2 class="done" v-else>Fait</h2>
    <SprintIssueContentCard v-if="onGoing" class="features" :nbrFeature="project.nbFeatureTodo" :nbrBug="project.nbBugsTodo" />
    <SprintIssueContentCard v-else class="features" :nbrFeature="project.nbFeatureDone" :nbrBug="project.nbBugsDone" />
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { Options, Vue } from 'vue-class-component';
import { Project } from '@cto-dashboard-model/cto-dashboard-model';
import SprintIssueContentCard from '@/components/SprintIssueContentCard.vue';

@Options({
  components: {
    SprintIssueContentCard,
  },
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