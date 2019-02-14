<style lang='stylus'>
</style>

<template>
    <div>
        <div class="card-menu" v-show="isMenu">
            <div class="every-card-top">
                内容目录
            </div>
            <div class="every-card-content" :class="index===currentMenu?'active':''" @click="clickMenu(index)" v-for="(item,index) in menuItem">{{item}}</div>
        </div>
        <div v-show="isShow">1111</div>
    </div>

</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            isShow: false,
            isMenu: true,
            menuItem: ["学校领导", "学校简介", "学校历史"],
            currentMenu: 0
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
        }
    }
};
</script>