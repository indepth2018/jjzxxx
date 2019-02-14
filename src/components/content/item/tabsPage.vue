<style lang='stylus'>
.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar
    width 960px
    margin-bottom 0
    background #45AA70
    border-radius 8px 8px 0 0
    padding 10px 0 0 10px

    .ivu-tabs-tab
        width 105px
        margin-top 5px
        border 1px solid #45AA70
        padding-left 10px

.tabsContent
    width 960px
    height 245px
    display block
    background #FFF
    border-radius 0 0 8px 8px
    overflow hidden

    .topTabs
        width 480px
        height 100px
        //background #000
        float left
        overflow hidden
        padding 10px 0 0 10px

        img
            width 120px
            height 100px
            float left
            margin-right 20px

        a
            color #3d3d3d

        .active-a
            &:hover
                text-decoration underline
                color #7FC41C

        .newsNote
            width 270px
            height 50px
            margin-top 5px
            color #999
            text-indent 2em
            display inline-block
            overflow hidden

    .detailTabs
        width 960px
        height 125px
        float left
        margin-top 20px
        margin-left 10px
        overflow hidden

        //background #000
        ul
            li
                width 480px
                height 25px
                float left
                font-size 14px
                display inline-block

                //line-height 25px
                svg
                    width 5px
                    height 5px
                    margin-bottom 7px
                    margin-right 7px
                    fill #45aa70

                .newsContent
                    width 300px
                    height 20px
                    overflow hidden
                    display inline-block

                    a
                        color #000

                        &:hover
                            text-decoration underline
                            color #45AA70

                .newsDate
                    float right
                    margin-right 20px
</style>

<template>
    <jx-tabs type="card">

        <TabPane v-for="item in tabs" :key="item.id" :label="item.title">
            <span class="tabsContent">
                <div class="topTabs" v-for="it1 in item.topNews">
                    <router-link :to="it1.turnTo" target="_blank">
                        <img :src="it1.img" alt="">
                    </router-link>
                    <router-link :to="it1.turnTo" target="_blank" class="active-a">
                        <h1 style="font-size:16px">{{it1.title}}</h1>
                    </router-link>
                    <p class="newsNote">{{it1.news}}</p>
                </div>
                <div class="detailTabs">
                    <ul>
                        <li v-for="it2 in item.ulNews">
                            <jx-symbol name="dot"></jx-symbol>
                            <div class="newsDate">{{it2.date}}</div>
                            <div class="newsContent">
                                <router-link :to="it2.turnTo" target="_blank">{{it2.content}}</router-link>
                            </div>
                        </li>

                    </ul>
                </div>
            </span>
        </TabPane>
    </jx-tabs>

</template>

<script>
import tabsData from "@/public/js/tabsData";
export default {
    name: "",

    mixins: [tabsData],
    components: {},
    data() {
        return {};
    },
    computed: {
        // tabs() {
        //     let tabs = [];
        //     tabs.push({
        //         content: "校园新闻"
        //     });
        //     tabs.push({
        //         content: "通知公告"
        //     });
        //     tabs.push({
        //         content: "校园速递"
        //     });
        //     tabs.push({
        //         content: "工作安排"
        //     });
        //     return tabs;
        // },
        firNews() {
            let firNews = [];
            firNews.push({
                content:
                    "我校运动健儿喜获雷州市第十四届中小学生田径运动会运动冠军",
                date: "2018.12.13"
            });
            firNews.push({
                content: "热烈庆祝十九大的召开",
                date: "2018.12.02"
            });
            firNews.push({
                content: "我校开展校外师生交流实践活动",
                date: "2018.12.13"
            });
            firNews.push({
                content:
                    "运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动",
                date: "2018.12.13"
            });
            firNews.push({
                content:
                    "运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动",
                date: "2018.12.13"
            });
            firNews.push({
                content:
                    "运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动",
                date: "2018.12.13"
            });
            firNews.push({
                content:
                    "运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动运动健儿运动健儿运动健儿运动健儿运动健儿运动健儿运动",
                date: "2018.12.13"
            });
            return firNews;
        }
    },
    methods: {}
};
</script>