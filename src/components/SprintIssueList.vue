<template>
  <div class="container">
    <p class="bug">{{nbrBug}} : Bugs</p>
    <p class="feature">{{nbrFeature}} : Features</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
      nbrBug: Number,
      nbrFeature: Number 
  }
})

export default class SprintIssueList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    text-align: left;
  }

  .bug {
    color: red;
  }

  .feature {
    color: blue;
  }
</style>
