<template>
    <div class="container">
        <div class="titleContainer">
            <p class="title">{{ projectName }}</p>
        </div>
        <div class="contentContainer">
            <p class="label">Bug :</p>
            <div class="issueListContainer">
                <SprintIssuesList :issues="bugListTodo" />
                <SprintIssuesList :issues="bugListDone" />
            </div>
            <p class="label">Feature :</p>
            <div class="issueListContainer">
                <SprintIssuesList :issues="featureListTodo" />
                <SprintIssuesList :issues="featureListDone" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Issue } from '@cto-dashboard-model/cto-dashboard-model'
import SprintIssuesList from '@/components/SprintIssuesList.vue'

@Options({
    props: {
        projectName: String,
        issues: Array as () => Array<Issue>,
    },
    components: {
        SprintIssuesList,
    },
    data() {
        return {
            bugListTodo: Array as () => Array<Issue>,
            bugListDone: Array as () => Array<Issue>,
            featureListTodo: Array as () => Array<Issue>,
            featureListDone: Array as () => Array<Issue>,
        }
    },
    mounted() {
        this.bugListTodo = this.issues.filter((issue: Issue) => issue.type === 'Bug' && issue.status === 'Todo')
        this.bugListDone = this.issues.filter((issue: Issue) => issue.type === 'Bug' && issue.status === 'Done')
        this.featureListTodo = this.issues.filter((issue: Issue) => issue.type === 'Feature' && issue.status === 'Todo')
        this.featureListDone = this.issues.filter((issue: Issue) => issue.type === 'Feature' && issue.status === 'Done')
    },
})
export default class ProjectDetails extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        margin-top: 50px;
        margin-left: 40px;
        width: 40%;
        border-radius: 20px;
        text-align: left;
        overflow-y: auto;
        box-shadow: 0 0.1875rem 0.5rem black;
        height: auto;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 10px;
    }

    .titleContainer {
        border-bottom: solid;
        border-width: 1px;
        text-align: center;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #673AB7;
        color: white;
    }

    .title {
        font-size: 20px;
        vertical-align: middle;
    }

    .contentContainer {
        display: flex;
        flex-direction: column;
        border-style: none;
    }

    .label {
        margin-left: 10px;
        font-size: 18px;
    }

    .issueListContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
