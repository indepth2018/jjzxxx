<style lang='stylus'>
.header
    display flex
    align-items center
    justify-content space-around
    cursor pointer
    user-select none

    &:hover
        color #7fc41c

    svg
        width 30px
        height 30px
        margin-right 10px

    .content
        width 40px
        display inline-block
        overflow hidden
</style>

<template>
    <div class="header" @click="isLogin">

        <jx-symbol name="header"></jx-symbol>
        <span class="content">{{account}}</span>
    </div>

</template>

<script>
import Cookies from "js-cookie";
export default {
    name: "",
    components: {},
    data() {
        return {};
    },
    computed: {
        account: {
            get() {
                if (sessionStorage.getItem("account"))
                    return sessionStorage.getItem("account");
                if (Cookies.get("Tooken")) return Cookies.get("Tooken");
                return "请登录";
            }
        }
    },
    methods: {
        isLogin() {
            if (this.account == "请登录") {
                this.$root.bus.$emit("login", true);
            } else {
                this.$Modal.confirm({
                    content: "是否退出当前账户",
                    onOk: () => {
                        if (sessionStorage.getItem("account"))
                            sessionStorage.removeItem("account");
                        if (Cookies.get("Tooken")) Cookies.remove("Tooken");
                        window.location.reload();
                    },
                    onCancel: () => {}
                });
            }
        }
    }
};
</script>