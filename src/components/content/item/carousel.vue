<style lang='stylus'>
.carousel-content
    width 430px
    margin 5px 5px 0 5px

    .carousel-img
        width 430px
        height 300px
        cursor default
        background #FFF

        img
            width 100%
            max-height 70%

        .carContent
            width 210px
            height 45px
            padding-top 6px
            display -webkit-box
            overflow hidden
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            text-overflow ellipsis

            a
                font-size 14px
                color #000
                cursor pointer

                &:hover
                    text-decoration underline
                    color #49872e
</style>

<template>
    <div class="carousel-content">
        <jx-carousel autoplay :height="280" v-model="value1" :autoplay-speed="4000" loop>
            <CarouselItem v-for="item in scrollContent">
                <div class="carousel-img">
                    <img :src="item.img" alt="">
                    <div class="carContent">
                        <router-link :to="item.turnTo" :title="item.content" target="_blank">{{item.content}}</router-link>
                    </div>
                </div>
            </CarouselItem>
        </jx-carousel>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return { value1: 0 };
    },
    computed: {
        scrollContent() {
            let scrollContent = [];
            scrollContent.push({
                img: require("@/public/img/sports1.jpg"),
                content:
                    "我校参加雷州市第十四届中小学生田径运动会勇夺佳绩1我校参加雷州市第十四届中小学生田径运动会勇夺佳绩1",
                turnTo: "/second"
            });
            scrollContent.push({
                img: require("@/public/img/yanxuelvxing1.jpg"),
                content: "我校开展2018年研学旅行活动",
                turnTo: "/second"
            });
            scrollContent.push({
                img: require("@/public/img/sports3.jpg"),
                content: "我校参加雷州市第十四届中小学生田径运动会勇夺佳绩3",
                turnTo: "/second"
            });
            scrollContent.push({
                img: require("@/public/img/sports4.jpg"),
                content: "我校参加雷州市第十四届中小学生田径运动会勇夺佳绩4",
                turnTo: "/second"
            });
            return scrollContent;
        }
    },
    methods: {}
};
</script>