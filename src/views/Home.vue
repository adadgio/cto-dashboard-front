<template>
  <div class="home">
    <HelloWorld :msg="'Hi'"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
      return {
        
      }
  },
  methods: {
      stuffHasBeenChange() {
        
      }
  }
})
export default class Home extends Vue {}
</script>
