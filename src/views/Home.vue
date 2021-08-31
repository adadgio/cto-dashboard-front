<template>
  <div class="home">
    <HelloWorld :msg="'Hi'"/>
    <SprintSelector
      :options="['', 'python', 'rust', 'javascript']"
     
   
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import SprintSelector from "@/components/SprintSelector.vue";
// @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    SprintSelector
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
