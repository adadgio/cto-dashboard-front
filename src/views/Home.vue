<template>
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
})
export default class Home extends Vue {}
</script>
