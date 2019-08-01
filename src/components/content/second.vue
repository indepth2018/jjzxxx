<style lang='stylus'>
.secContent
    //height 200px
    background #e5f6fe
</style>

<template>
    <div class="secContent">
        <div class="card-menu" v-show="isMenu">
            <div class="every-card-top">
                内容目录
            </div>
            <div class="every-card-content" :class="index===currentMenu?'active':''" @click="clickMenu(index)" v-for="(item,index) in menuItem">{{item}}</div>
        </div>

        <div class="news" v-show="isNews">
            <h1>标题</h1>
            <p>内容</p>
        </div>
        <page :currentMenu="currentMenu" v-show="isMenu"></page>
    </div>

</template>

<script>
import page from "./item/page.vue";
export default {
    name: "",
    components: { page },
    data() {
        return {
            isShow: false,
            isMenu: true,
            menuItem: ["学校领导", "学校简介", "学校历史"],
            currentMenu: 0,
            isNews: false
        };
    },
    computed: {},
    methods: {
        clickMenu(index) {
            this.isShow == true ? (this.isShow = false) : (this.isShow = true);
            this.currentMenu = index;
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.isMenu = false;
            this.isNews = true;
        } else {
            this.isMenu = true;
            this.isNews = false;
        }
    }
};
</script>