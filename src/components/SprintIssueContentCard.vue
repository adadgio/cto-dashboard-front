<template>
    <div class="container">
        <p class="bug">Bugs : {{nbrBug}}</p>
        <p class="feature">Features : {{nbrFeature}}</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        nbrBug: Number,
        nbrFeature: Number,
    },
})

export default class SprintIssueContentCard extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    text-align: left;
    padding-left: 5px;
  }

  .bug {
    color: red;
  }

  .feature {
    color: blue;
  }
</style>
