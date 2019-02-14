<style lang='stylus'>
.scroll
    height 25px
    margin 9px 0
    user-select none

    //overflow hidden
    //white-space nowrap
    .notice
        margin-top 3px
        float left
        padding 0 3px 0 3px
        fill currentColor
        display inline-block
        user-select none

        svg
            color #76dc0b
            width 20px
            height 20px
            display inline-block
            vertical-align middle
            margin-right 2px

        .noticeWord
            color #ea4747
            vertical-align middle

    .scrollWord
        line-height 27px
        overflow hidden
        white-space nowrap

        ul
            li
                display inline-block
                margin-right 40px
                overflow hidden

                .newsLink
                    margin-left 4px

                    a
                        color #AA0000

                    &:hover
                        text-decoration underline

                .newsDate
                    margin-left 10px
                    color #5aa4f1
</style>

<template>
    <div class="scroll">
        <div class="notice">
            <jx-symbol name="notice"></jx-symbol>
            <span class="noticeWord"><b>公告</b></span>

        </div>

        <div class="scrollWord" ref="scrollWord">
            <ul ref="scrollUl1" style="float:left">
                <li v-for="(item,index) in contentAndDate">
                    <span class="newsLink">
                        <router-link :to="item.turnTo" :title="item.content" target="_blank">{{item.content}}</router-link>
                    </span>
                    <span class="newsDate">{{item.date}}</span>
                </li>

            </ul>
            <ul ref="scrollUl2"></ul>
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
        contentAndDate() {
            let contentAndDate = [];
            contentAndDate.push({
                content: "2018年春季学科教学工作计划（三年级）",
                date: "2018.12.2",
                turnTo: "/second"
            });
            contentAndDate.push({
                content: "2018年春季学科教学工作计划（四年级）",
                date: "2018.12.2",
                turnTo: "/second"
            });
            contentAndDate.push({
                content: "2018年春季学科教学工作计划（五年级）",
                date: "2018.12.2",
                turnTo: "/second"
            });
            return contentAndDate;
        }
    },
    methods: {},
    mounted() {
        // 滚动js代码
        let scrollWord = this.$refs.scrollWord;
        let scrollUl1 = this.$refs.scrollUl1;
        let scrollUl2 = this.$refs.scrollUl2;
        scrollUl2.innerHTML = scrollUl1.innerHTML;
        function scrollUp() {
            scrollWord.scrollLeft >= scrollUl1.offsetWidth
                ? (scrollWord.scrollLeft = 0)
                : (scrollWord.scrollLeft += 1);
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