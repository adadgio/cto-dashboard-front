<template>
    <div class="hello">
        Hello
        <span class="grey--text">Number 10</span>
        <br>
        <span>{{projectlist}}</span>
        <br>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
    props: {
        msg: String,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['projectlist']),
    },
    methods: {

    },

    mounted() {
        this.$store.dispatch('fetchProject', 1)
    },

})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
