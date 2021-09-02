<template>
    <div class="issueContainer">
        <div>
            <ul class="list">

                <template v-for="issue in issues" :key="issue.id">
                    <template v-if="issue.status === 'Todo'">
                        <li class="contentContainer">
                            <div class="bug"></div>
                            <p class="contentLabel">{{ issue.name }}</p>
                        </li>
                    </template>

                    <template v-if="issue.status === 'Done'">
                        <li class="contentContainer">
                            <div class="feature"></div>
                            <p class="contentLabel">{{ issue.name }}</p>
                        </li>
                    </template>
                </template>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Issue } from '@cto-dashboard-model/cto-dashboard-model'
import { PropType } from '@vue/runtime-core'

@Options({
    props: {
        issues: {
            type: [] as PropType<Issue>,
            default: [],
        },
    },
})
export default class SprintIssuesList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .issueContainer {
        text-align: left;
        width: 50%;
        min-width: 150px;
    }

    .bug {
        min-width: 15px;
        min-height: 15px;
        border-radius: 100%;
        background-color: crimson;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
    }

    .feature {
        min-width: 15px;
        min-height: 15px;
        border-radius: 100%;
        background-color: #10b981;
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
        overflow-wrap: break-word;
    }
</style>
