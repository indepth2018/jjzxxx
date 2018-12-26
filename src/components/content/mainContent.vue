<style lang='stylus'>
.content
    height 800px
    //border 1px solid #a26868
    display block

    .menuBar
        height 80px
        border 1px solid #000
        border-radius 8px
        padding 4px

        ul
            li
                width 158px
                height 36px
                //border 1px solid #000
                float left
                text-align center
                cursor pointer
                line-height 36px
                font-size 13px

                &:hover
                    //background #9e9797

                .menu-item
                    padding 8px 40px
                    color #000

                    &:hover
                        text-decoration underline
                        color #506b9e
</style>

<template>
    <div class="content">
        <div class="menuBar">
            <ul>
                <li>
                    <router-link to="./first" class="menu-item">网站首页</router-link>
                </li>
                <li>
                    <router-link to="./second" class="menu-item">学风建设</router-link>
                </li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>

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
    computed: {},
    methods: {}
};
</script>