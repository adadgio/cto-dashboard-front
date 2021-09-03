<template>
    <div id="divider"></div>
    <div class="custom-select">
        <Multiselect
            @change="test"
            v-model="value"
            :createTag="true"
            mode="tags"

            placeholder="Selectionner un sprint"
            :options="sprintList.map((sprint) =>  ({value: {name: sprint.name, id: sprint.projectId}, label: sprint.name }))"
        />
    </div>
</template>

<script lang="ts">
import Multiselect from '@vueform/multiselect'

import { Vue, Options } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
    components: {
        Multiselect,
    },
    props: {
        options: {
            type: Array,
            required: true,
        },

    },

    data() {
        return {

            value: null,
            sprintListData: [],
        }
    },
    methods: {

        test() {
            setTimeout(() => {
                console.log(this.value)
            }, 1)
        },

    },
    computed: {
        ...mapState(['sprintList']),

    },

    mounted() {
        this.$store.dispatch('fetchSprints')
    },

})
export default class SprintSelector extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#divider {
  height: 10px;
}
.multiselect {
    position: relative;
    margin: 0 auto;
    width: 60%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: var(--ms-border-width,1px) solid var(--ms-border-color,#d1d5db);
    border-radius: var(--ms-radius,4px);
    background: var(--ms-bg,#fff);
    font-size: var(--ms-font-size,1rem);
    min-height: calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);
}

.multiselect.multiselect-tag{
    background: #673AB7 !important;
    }

.custom-select {
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  outline: none;
  height: 60px;
  line-height: 47px;
  background-color:#673AB7;
}

</style>
<style src="@vueform/multiselect/themes/default.css"></style>
