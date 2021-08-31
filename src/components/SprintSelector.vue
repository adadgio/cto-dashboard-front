<template>
    <div class="custom-select">
        <div class=" select-tags" v-for="item of selectedItems" :key="item.id">
            <p class="tags">{{ item.name }}</p>
        </div>
    </div>
    <section class="dropDownMenuWrapper">
        <!-- Dropdown toggle button -->
        <button class="dropDownMenuButton" @click="toggle"> Select your sprint</button>
        <!-- if active open the drop down -->
        <div class="dropdown" v-if="active" >
            <div v-for="option of options" :key="option.id">
                <div
                    :checked="option.checked"
                    @click="onSelect(option)"
                >
                    {{ option.name }}
                </div>
            </div>
        </div>
    </section>
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
            active: false,
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
            console.log(test)
            this.$emit('onChange', test)
        },
        toggle() {
            this.active = !this.active
        },
    },
})
export default class SprintSelector extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropDownMenuWrapper {
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background: white;
  border: 1px solid #eee;
  box-shadow: 10px 10px 0 0 rgba(black,.03);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

  .dropDownMenuButton {
    font-size: inherit;
    background: none;
    outline: none;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 70px 0 20px;
    margin: 0;
    line-height: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
  }

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
  color: #fff;
  overflow: hidden;
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

</style>
