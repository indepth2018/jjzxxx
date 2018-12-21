<style lang='stylus'>
.scrollWord
    height 25px
    overflow hidden
    white-space nowrap

    ul
        li
            display inline-block
            margin-right 200px
            overflow hidden
</style>

<template>
    <div class="scrollWord" ref="scrollWord" @click="test">
        <ul ref="scrollUl">
            <li>好消息好消息1111111111111111111</li>
            <li>网页开始动工啦呀呀呀111111</li>
            <li>12222222222222222222</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        test() {
            console.log(this.$refs.scrollWord.offsetWidth);
            console.log(this.$refs.scrollWord.scrollLeft);
            console.log(this.$refs.scrollUl.offsetWidth);
        }
    },
    mounted() {
        let scrollWord = this.$refs.scrollWord;
        let scrollUl = this.$refs.scrollUl;
        function scrollUp() {
            scrollWord.scrollLeft++;
        }
        let scrollTime = setInterval(scrollUp, 50);
        scrollWord.onmouseover = () => {
            clearInterval(scrollTime);
        };
        scrollWord.onmouseout = () => {
            scrollTime = setInterval(scrollUp, 50);
        };
    }
};
</script>