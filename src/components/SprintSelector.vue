<template>
    <div class="custom-select">
        <div>{{selectedItems}}</div>

        <div class="dropdown">
            <div v-for="option of options" :key="option.id" @click="onSelect(option)">
                <input type="checkbox"> {{ option.name }}
            </div>

        </div>


    <!--<select class="custom-select items">
        <option v-for="(option, i) of options" :key="i" 
        @click="onSelect(option)"
        >
        
        </option>
    </select>
    <span>Selected: {{ selectArray }}</span>-->
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
props: {
    options: {
        type: Array,
        required: true,
    },
},
data() {
    return {
        selectedItems: [],
        open: false,
    }
},
methods: {
    onSelect(option: any) {

        // si l'option est déjà sélectionnée, on la retire
        // sinon, on l'ajoute
        //if (this.selectedItems.includes(option)) {
        //    const index = this.selectedItems.indexOf(option)
        //    this.selectedItems.splice(index, 1)
        //} else {
        //    this.selectedItems.push(option)
        //}

        this.selectedItems.push(option)
        console.log(this.selectedItems)

        this.$emit('onChange', this.selectedItems)
    }

},
})
export default class SprintSelector extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 60px;
  line-height: 47px;
  background-color: red;
}

.custom-select .selected {
  background-color: #0a0a0a;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}



.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
