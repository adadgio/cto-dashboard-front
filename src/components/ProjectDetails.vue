<template>
    <div class="container">
        <p class="title">{{ project.name }}</p>
        <div class="contentContainer">
            <p class="label">Bugs :</p>
            <div class="issueListContainer">
                <SprintIssuesList :issues="bugTodoList" />
                <!-- <SprintIssuesList :issues="issues.getBugListDone" /> -->
            </div>
            <p class="label">Features :</p>
            <div class="issueListContainer">
                <!-- <SprintIssuesList :issues="issues.getFeatureListTodo" />
                <SprintIssuesList :issues="issues.getFeatureListDone" /> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Issue, Project } from '@cto-dashboard-model/cto-dashboard-model'
import SprintIssuesList from '@/components/SprintIssuesList.vue'

@Options({
    props: {
        issues: Array as () => Array<Issue>,
        project: Project,
    },
    components: {
        SprintIssuesList,
    },
    computed: {
        bugTodoList: Array as () => Array<Issue>,
        bugDoneList: Array as () => Array<Issue>,
        featureTodoList: Array as () => Array<Issue>,
        featureDoneList: Array as () => Array<Issue>,
    },
    mounted() {
        this.bugTodoList = this.store.getters.getBugListTodo(this.project.id)
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
        height: 70vh;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 10px;
        border-radius: 10px;
    }

    .title {
        font-size: 20px;
        border-bottom: solid;
        border-width: 1px;
        text-align: center;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #673AB7;
        color: white;
        margin: 0px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 35px;
        vertical-align: text-top;
        align-items: center;
        box-shadow: 0 0.1875rem 0.5rem black;
    }

    .contentContainer {
        display: flex;
        flex-direction: column;
        border-style: none;
        overflow-y: auto;
        overflow-x: hidden;
        height: 90%;
        background-color: #e7e7e7;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 0.1875rem 0.5rem black;
    }

    .label {
        margin-left: 10px;
        font-size: 18px;
    }

    .issueListContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
