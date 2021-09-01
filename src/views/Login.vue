<template>
    <div id="dashboard-login">
        <h3>Il faut se connecter</h3>
        <form @submit.prevent="onFormSubmit">
            <div>
                <label>Username</label>
                <input
                    v-model="username"
                    class="form-styling"
                    placeholder="Username"
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    v-model="password"
                    class="form-styling"
                    type="password"
                    placeholder="Password"
                    required
                />
            </div>
            <button id="btn-submit" type="submit">Login</button>
        </form>
        <div class="error">{{error}}</div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
    components: {
    },
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        onFormSubmit() {
            this.$store.dispatch('login', { username: this.username, password: this.password })
                .then(() => {
                    this.$router.push('/')
                })
        },
    },
    computed: {
        ...mapState({
            error: (state: any) => {
                return state.error
            },
        }),
    },
})
export default class Login extends Vue {}
</script>

<style scopped>
    #dashboard-login{
        width: 30%;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: grey;
        border: 2px solid black;
        border-radius: 20px;
        padding: 0px 10px;
    }
    .form-group {
        margin: 20px;
    }
    .form-group.label {
        display: block;
        padding-left: 5px;
    }
    .form-styling {
        width: 70%;
        height: 35px;
        padding-left: 15px;
        border: 2px solid grey;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    label {
        font-weight: 400;
        text-transform: uppercase;
        color: grey;
        display: block;
    }
    #btn-submit {
        width: 90%;
        height: 35px;
        text-transform: uppercase;
        font-weight: 800;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        margin-bottom: 10px;
    }
</style>
