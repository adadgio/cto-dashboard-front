<template>
    <div>
        <div v-if="!user">
            <DashboardLogin />
        </div>
        <div v-else>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import { User } from '@cto-dashboard-model/cto-dashboard-model'
import { Options, Vue } from 'vue-class-component'
import DashboardLogin from './components/DashboardLogin.vue'

@Options({
    components: {
        DashboardLogin,
    },
    computed: {
        user(): User {
            return this.$store.state.user
        },
    },
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
