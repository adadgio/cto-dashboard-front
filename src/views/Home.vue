<template>
<<<<<<< HEAD
  <div class="home">
    <ProjectList :projects="[{
                              'name':	'Projet de test 1',
                              'nbBugsTodo': '2',
                              'nbBugsDone': '3',
                              'nbFeatureTodo': '1',
                              'nbFeatureDone': '4',
                              },
                              {
                              'name':	'Projet de test 2',
                              'nbBugsTodo': '4',
                              'nbBugsDone': '6',
                              'nbFeatureTodo': '0',
                              'nbFeatureDone': '7',
                              }
                            ]" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProjectList from '@/components/ProjectList.vue';

@Options({
  components: {
    ProjectList
  },
  data() {
      return {
        
      }
  },
  methods: {
      stuffHasBeenChange() {
        
      }
  }
=======
    <div class="home">
        <HelloWorld :msg="'Hi'"/>
        <SprintSelector
            :options="sprints"
            @onChange="onSelectChange"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import SprintSelector from '@/components/SprintSelector.vue'
import { SprintSelectorEvent } from '@/events/Events'

@Options({
    components: {
        HelloWorld,
        SprintSelector,
    },
    data() {
        return {
            sprints: [
                {
                    id: 1, name: 'Sprint 1',
                },
                {
                    id: 2, name: 'Sprint 2',
                },
            ],
        }
    },
    methods: {
        onSelectChange(e: SprintSelectorEvent) {
            // event received
            console.log(e)
        },
    },
>>>>>>> develop
})
export default class Home extends Vue {}
</script>
