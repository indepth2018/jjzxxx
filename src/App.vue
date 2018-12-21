<style lang="stylus">
//全局滚动条样式
&::-webkit-scrollbar
    height 8px
    width 8px

&::-webkit-scrollbar-thumb:horizontal, &::-webkit-scrollbar-thumb:vertical
    border-radius 6px
    -webkit-box-shadow inset 0 0 2px rgba(0, 0, 0, 0.3)
    background-color #d4dedf

&::-webkit-scrollbar-track:vertical, &::-webkit-scrollbar-track:horizontal
    border-radius 6px
    -webkit-box-shadow inset 0 0 2px rgba(0, 0, 0, 0.3)
    background-color #fff

html, body
    width 100%
    height 100%
    margin 0
    padding 0

div, p, a, ul, li
    margin 0
    padding 0
    list-style none
</style>

<template>
    <main-body />
</template>

<script>
import mainBody from "./components/mainBody.vue";

export default {
    "#el": "app",
    name: "",
    components: {
        mainBody
    }
};
</script>


