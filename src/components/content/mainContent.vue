<style lang='stylus'>
.content
    height auto
    display block

    .menuBar
        height 80px
        border 1px solid #000
        border-radius 8px
        padding 4px
        user-select none
        background #49872E
        margin-bottom 10px

        ul
            list-style-type none

            li
                width 128px
                height 37px
                float left
                text-align center
                cursor pointer
                line-height 36px
                font-size 13px
                border 1px solid #49872E
                border-radius 8px
                margin 0 15px

                .menu-item
                    display flex
                    justify-content space-around
                    color #FFF

                &:hover
                    text-decoration underline
                    background #396924

                .router-link-active
                    background #396924
                    border-radius 8px

    .every-content
        height auto
</style>

<template>
    <div class="content">
        <div class="menuBar">
            <ul>
                <li v-for="item in menuItem">
                    <router-link :to="item.turnTo" class="menu-item">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="every-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import router from "../router/index.js";
export default {
    name: "",
    router,
    components: {},
    data() {
        return {};
    },
    computed: {
        menuItem() {
            let menuItem = [];
            menuItem.push({
                title: "网站首页",
                turnTo: "./first"
            });
            menuItem.push({
                title: "学校历史",
                turnTo: "./second"
            });
            menuItem.push({
                title: "校园通知",
                turnTo: "./third"
            });
            menuItem.push({
                title: "校园新闻",
                turnTo: "./fourth"
            });
            menuItem.push({
                title: "教师风采",
                turnTo: "./teacherRoom"
            });
            menuItem.push({
                title: "上级文件",
                turnTo: "./sixth"
            });
            menuItem.push({
                title: "校园图库",
                turnTo: "./seventh"
            });
            menuItem.push({
                title: "体卫艺工",
                turnTo: "./eighth"
            });
            menuItem.push({
                title: "德育天地",
                turnTo: "./ninth"
            });
            menuItem.push({
                title: "班级风采",
                turnTo: "./tenth"
            });
            menuItem.push({
                title: "成绩查询",
                turnTo: "./eleventh"
            });
            menuItem.push({
                title: "意见反馈",
                turnTo: "./twelfth"
            });
            return menuItem;
        }
    },
    methods: {}
};
</script>