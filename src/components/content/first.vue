<style lang='stylus'>
.firContent
    //height 600px
    .row-area
        height 290px
        width 960px
        margin 10px 0
        //margin 0 auto 6px
        //border 1px solid #000
        overflow hidden

        .col-a
            width 440px
            float left
            overflow hidden
            border-radius 8px
            background #FFF
            //box-shadow 2px 2px 5px #FFF

        .blankArea
            width 10px
            height 10px
            float left

        .col-b
            float left
</style>

<template>
    <div class="firContent">

        <topScroll></topScroll>

        <div class="row-area">
            <div class="col-a">
                <jxlazy time='500'>
                    <carousel></carousel>
                </jxlazy>

            </div>

            <div class="blankArea"></div>
            <jxlazy time='500'>
                <div class="col-b">
                    <schoolIntro></schoolIntro>
                </div>
            </jxlazy>
            <div class="blankArea"></div>
            <jxlazy time='500'>
                <div class="col-b">
                    <schoolHonor></schoolHonor>
                </div>
            </jxlazy>
        </div>
        <div class="row-area">
            <jxlazy time='700'>
                <tabsPage></tabsPage>
            </jxlazy>
        </div>
    </div>
    </div>
</template>

<script>
import carousel from "./item/carousel";
import topScroll from "./item/topScroll";
import tabsPage from "./item/tabsPage";
import schoolIntro from "./item/schoolIntro";
import schoolHonor from "./item/schoolHonor";
import jxlazy from "@/public/components/jx-lazy.vue";
export default {
    name: "",
    components: {
        carousel,
        topScroll,
        tabsPage,
        schoolIntro,
        schoolHonor,
        jxlazy
    },
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>