<style lang='stylus'>
.honorIntro
    width 250px
    height 285px
    background #FFF
    border-radius 8px
    overflow hidden

    .card-top
        height 42px
        line-height 42px
        padding 0 15px
        background #f38a3c

        .top-title
            font-size 16px
            color #FFF
            float left

        .top-more
            a
                font-size 16px
                color #FFF
                float right

                &:hover
                    text-decoration underline

    .card-content
        width 250px
        height 240px
        overflow hidden
        padding 10px
        font-size 14px

        ul
            li
                width 230px
                overflow hidden
                margin 5px 0

                svg
                    width 5px
                    height 5px
                    margin-bottom 8px
                    margin-right 7px
                    fill #f38a3c

                a
                    width 215px
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    color #000
                    display inline-block

                    &:hover
                        text-decoration underline
</style>

<template>
    <div class="honorIntro">
        <div class="card-top">
            <div class="top-title">学校殊荣</div>
            <div class="top-more">
                <router-link to="/third" target="_blank">更多 ></router-link>
            </div>
        </div>
        <div class="card-content">
            <ul>
                <li v-for="item in honorList">
                    <jx-symbol name="dot"></jx-symbol>
                    <router-link :to="item.turnTo" target="_blank" :title="item.content">{{item.content}}</router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {};
    },
    computed: {
        honorList() {
            let honorList = [];
            honorList.push({
                turnTo: "second",
                content: "2014年雷州市优秀教育单位"
            });
            honorList.push({
                turnTo: "second",
                content: "2015年雷州市文明校园"
            });
            honorList.push({
                turnTo: "second",
                content: "2016年雷州市安全教育单位"
            });
            honorList.push({
                turnTo: "second",
                content: "2017年雷州市先进示范小学"
            });
            honorList.push({
                turnTo: "second",
                content: "2018年雷州市最美校园之一"
            });
            honorList.push({
                turnTo: "second",
                content: "2019年雷州市优秀学生人才培养基地"
            });
            return honorList;
        }
    },
    methods: {}
};
</script>