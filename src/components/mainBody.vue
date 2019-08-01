<style lang='stylus'>
.totalPage
    //background #A2CB7F
    background #e5f6fe

    .mainBody
        width 960px
        margin 0 auto
        background #e5f6fe
        padding-bottom 20px
</style>

<template>
    <div class="totalPage">
        <main-head></main-head>
        <div class="mainBody">

            <main-content></main-content>
            <main-foot></main-foot>

        </div>
        <login></login>
    </div>

</template>

<script>
import mainHead from "./head/mainHead";
import mainContent from "./content/mainContent";
import mainFoot from "./foot/mainFoot";
import login from "./content/item/login.vue";
export default {
    name: "",
    components: { mainHead, mainContent, mainFoot, login },
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>