<style lang='stylus'>
.page
    border 1px solid #FFF
    border-radius 8px
    padding 10px

    .every-news
        height 40px
        line-height 40px
        font-size 18px
        overflow hidden
        border-bottom 1px solid #ccc

        //vertical-align middle
        .news-content
            vertical-align middle

            &:hover
                cursor pointer
                color #7fc41c
</style>

<template>
    <div class="page">
        <div v-for="index in pageData">
            <div class="every-news">
                <div class="news-content">{{index}}</div>
            </div>
            <div class="line"></div>
        </div>

        <Page :page-size='10' :total="totalNum" :current.sync="currentPage" @on-change="changePage" show-total></Page>

    </div>
</template>

<script>
export default {
    name: "",
    props: {
        currentMenu: {
            default: 0
        }
    },
    components: {},
    data() {
        return {
            pageData: [],
            totalNum: 0,
            currentPage: 1
        };
    },
    computed: {},
    watch: {
        currentMenu(newV, oldV) {
            // let
        }
    },
    methods: {
        changePage() {
            $.ajax({
                type: "post",
                data: { page: this.currentPage },
                // url: "http://112.74.63.53/login/newsData.php",
                url: "http://172.29.37.198/login/newsData.php",

                success: response => {
                    if (response) {
                        this.pageData = response.split(",");
                        this.pageData.pop();
                    }
                }
            });
        }
    },
    mounted() {
        if (this.currentMenu == 0) {
            $.ajax({
                type: "post",
                data: { page: 1 },
                // url: "http://112.74.63.53/login/newsData.php",
                url: "http://172.29.37.198/login/newsData.php",
                success: response => {
                    if (response) {
                        this.pageData = response.split(",");
                        this.pageData.pop();
                    }
                }
            });
        }
        //获取数据总数
        $.ajax({
            type: "post",
            // data:
            // url: "http://112.74.63.53/login/allNews.php",
            url: "http://172.29.37.198/login/allNews.php",
            success: response => {
                if (response) {
                    console.log(response);
                    this.totalNum = parseInt(response);
                    console.log(this.totalNum);
                }
            }
        });
    }
};
</script>