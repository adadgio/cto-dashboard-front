<template>
    <div class="container">
        <p>Bugs :</p>
        <div>
            <template v-for="issue in issues" :key="issue.name">
                <ul class="list">
                    <template v-if="issue.status === 'Todo'">
                        <li class="contentContainer">
                            <div class="bug"></div>
                            <p class="contentLabel">{{ issue.name }}</p>
                        </li>
                    </template>
                </ul>
            </template>
            <template v-for="issue in issues" :key="issue.name">
                <ul class="list">
                    <template v-if="issue.status === 'Done'">
                        <li class="contentContainer">
                            <div class="feature"></div>
                            <p class="contentLabel">{{ issue.name }}</p>
                        </li>
                    </template>
                </ul>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Issue } from "@cto-dashboard-model/cto-dashboard-model";

@Options({
    props: {
        issues: Array as () => Array<Issue>,
    }
})
export default class SprintIssuesList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        text-align: left;
    }

    .bug {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: red;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
    }

    .feature {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: green;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
    }

    .list {
        list-style: none;
    }

    .contentContainer {
        display: flex;
        flex-direction: row;
    }

    .contentLabel {
        margin: 0px;
    }
</style>
