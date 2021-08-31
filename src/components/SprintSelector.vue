<template>
    <div class="custom-select">
        <div class=" select-tags" v-for="item of selectedItems" :key="item.id">
            <p class="tags">{{ item.name }}</p>
        </div>
    </div>
    <div class="dropdown">
        <div v-for="option of options" :key="option.id">
            <label>
                <input
                    type="checkbox"
                    v-model="option.checked"
                    @click="onSelect(option)"
                    @change="onSelectChange"
                />
                {{ option.name }}
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

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
            checked: false,
        }
    },
    methods: {
        onSelect(option: any) {
            let test
            const id = this.selectedItems.map((x: any) => x.id)
            if (id.includes(option.id) && option.checked) {
                const index = this.selectedItems.indexOf(option)
                test = this.selectedItems.splice(index, 1)
            } else {
                test = this.selectedItems.push(option)
            }
            this.$emit('onChange', test)
        },
    },
})
export default class SprintSelector extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.select-tags {
  border-radius: 50px;
  height: 10px;
  width: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #40a8f7;
  margin-left: 10px;
}
.tags {
  display: flex;
  color: #fff;
  font-weight: bold;
  justify-content: center;
}
.dropdown {
  color: #ffffff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ce9b2c;
  border-left: 1px solid #ce9b2c;
  border-bottom: 1px solid #ce9b2c;
  position: absolute;
  background-color: #080d0e;
  left: 0;
  right: 0;
}
.custom-select {
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 60px;
  line-height: 47px;
  background-color: #dddddd;
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
