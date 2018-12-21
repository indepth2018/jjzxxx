<style lang='stylus'>
.firContent
    height 600px

    .row-area
        height 290px
        width 960px
        margin 0 auto 6px
        border 1px solid #000

        .col-a
            width 400px
            float left
            overflow hidden
</style>

<template>
    <div class="firContent">

        <topScroll></topScroll>

        <div class="row-area">
            <div class="col-a">
                <carousel></carousel>
            </div>

        </div>
    </div>
</template>

<script>
import carousel from "./item/carousel";
import topScroll from "./item/topScroll";
export default {
    name: "",
    components: { carousel, topScroll },
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>