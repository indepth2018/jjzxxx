<style lang='stylus'>
.mainHead
    width 100%
    height 440px
    margin 0 auto

    //border 1px solid #2c2c2c
    //display block
    .topHead
        width 100%
        height 100px
        background url('../../public/img/bottom/head_bg.png') repeat-x left bottom
        position relative
        z-index 199
        margin-bottom -12px

        .badgeAndMotto
            width 960px
            margin 0 auto

            .badge
                width 255px
                height 80px
                margin 0 auto
                margin-top 4px
                //margin-left 20%
                cursor pointer

            .motto
                width 400px
                height 80px
                margin-top 4px
                //margin-right 20%
                //margin-right 5%
                float right

    .top_big
        width 100%
        position relative
        z-index 2

        img
            width 100%
            height 350px
</style>

<template>
    <div class="mainHead">
        <div class="topHead">
            <div class="badgeAndMotto">
                <router-link to="/first"><img class="badge" src="@/public/img/badge/badge.png" alt=""></router-link>
                <img class="motto" src="@/public/img/badge/motto.png" alt="">
            </div>
        </div>
        <div class="top_big">
            <img src="@/public/img/top_big/top_big.png" alt="">
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
    methods: {},
    mounted() {},
    created() {}
};
</script>