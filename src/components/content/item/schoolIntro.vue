<style lang='stylus'>
.schoolIntro
    width 250px
    height 285px
    background #FFF
    border-radius 8px
    overflow hidden

    .card-top
        height 42px
        line-height 42px
        padding 0 15px
        background #4E94DB

        .top-title
            font-size 16px
            color #FFF
            float left

        .top-more
            a
                font-size 16px
                color #FFF
                float right

                &:hover
                    text-decoration underline

    .card-content
        width 250px
        height 240px

        a
            color #3d3d3d

            &:hover
                text-decoration underline
                color #7FC41C

        .newsNote
            height 185px
            color #999
            text-indent 2em
            //display inline-block
            overflow hidden
            padding 10px

            img
                float left
                width 100px
                margin 0 7px 5px 0
</style>

<template>
    <div class="schoolIntro">
        <div class="card-top">
            <div class="top-title">学校简介</div>
            <div class="top-more">
                <router-link :to="{name: 'second',query:{id:1}}" target="_blank">更多 ></router-link>
            </div>
        </div>
        <div class="card-content">
            <router-link to="/second" target="_blank">
                <h1 style="font-size:18px;margin:10px 0 0 40px;">纪家镇中心小学简介</h1>
            </router-link>
            <div class="newsNote">
                <img src="@/public/img/badge/simpleBadge.png" alt="">
                纪家镇中心小学创建于1933年，坐落在纪家镇圩东南面。学校坚持“为学生终生发展积蓄力量”的办学宗旨，以“全力打造农村现代化教育规范化管理一流学校”为办学目标，努力践行“以人为本，和谐发展，争创主流”的办学理念，秉承“博取、创新、明德、厚学”的校训...
            </div>
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
    computed: {},
    methods: {}
};
</script>