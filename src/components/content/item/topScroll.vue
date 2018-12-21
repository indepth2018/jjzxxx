<style lang='stylus'>
.scrollWord
    height 25px
    line-height 25px
    overflow hidden
    white-space nowrap

    ul
        display inline-block

        li
            display inline-block
            margin-right 200px
            overflow hidden
</style>

<template>
    <div class="scrollWord" ref="scrollWord" @click="test">
        <ul ref="scrollUl1">
            <li>好消息好消息1111111111111111111</li>
            <li>网页开始动工啦呀呀呀111111</li>
            <li>12222222222222222222</li>
        </ul>
        <ul ref="scrollUl2"></ul>
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

            console.log(this.$refs.scrollUl2.innerHTML);
        }
    },
    mounted() {
        let scrollWord = this.$refs.scrollWord;
        let scrollUl1 = this.$refs.scrollUl1;
        let scrollUl2 = this.$refs.scrollUl2;
        scrollUl2.innerHTML = scrollUl1.innerHTML;
        function scrollUp() {
            scrollWord.scrollLeft >= scrollUl1.offsetWidth
                ? (scrollWord.scrollLeft = 0)
                : scrollWord.scrollLeft++;
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