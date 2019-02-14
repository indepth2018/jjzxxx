<style lang='stylus'>
.eleContent
    width 700px
    height 400px
    border-radius 8px
    overflow hidden
    background #FFF
    margin-bottom 20px

    .top
        width 700px
        height 42px
        line-height 42px
        padding 0 15px
        background #22bed1

    .title
        width 700px
        height 100px
        margin 0 auto
        display flex
        justify-content space-around
        align-items center
</style>

<template>
    <div class="eleContent">

        <div class="top">
            <span style="font-size:16px;color:#FFF;">成绩查询</span>
        </div>
        <div class="title">
            <h1 style="font-size:16px">请选择您要查询的内容：</h1>
            <Select v-model="model" style="width:300px" @on-change="chooseExam()">
                <Option v-for="item in testList" :value="item" :key="item">{{ item }}</Option>
            </Select>
        </div>
        <scoreForStu v-show="isFinalShow"></scoreForStu>
        <scoreForTea v-show="isFinalShow1"></scoreForTea>

    </div>

</template>

<script>
import scoreForTea from "./scoreItem/scoreForTea.vue";
import scoreForStu from "./scoreItem/scoreForStu.vue";
export default {
    name: "",

    components: { scoreForTea, scoreForStu },
    data() {
        return {
            testList: [
                "2018-2019学年度春季期末考试成绩(教师端)",
                "2018-2019学年度春季期末考试成绩(学生端)"
            ],
            model: "",
            isFinalShow: false,
            isFinalShow1: false
        };
    },
    computed: {},
    methods: {
        chooseExam() {
            this.model == "2018-2019学年度春季期末考试成绩(学生端)"
                ? (this.isFinalShow = true)
                : (this.isFinalShow = false);
            this.model == "2018-2019学年度春季期末考试成绩(教师端)"
                ? (this.isFinalShow1 = true)
                : (this.isFinalShow1 = false);
        }
    },
    mounted() {}
};
</script>