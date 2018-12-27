<style lang='stylus'>
.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab
    width 95px
</style>

<template>
    <jx-tabs type="card">

        <TabPane v-for="tab in tabs" :key="tab" :label="'活动'+tab">
            <span>活动{{tab}}</span>
        </TabPane>
    </jx-tabs>

</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return { tabs: 5 };
    },
    computed: {},
    methods: {}
};
</script>