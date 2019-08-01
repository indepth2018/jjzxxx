<style lang='stylus'>
.tips
    margin-bottom 20px

.form
    .input-css
        //position absolute
        //top 50%
        //left 50%
        //transform translate(-50%, -50%)
        display block
        margin 10px 0
        margin-left 60px

    .button-css
        margin-top 20px
        margin-left 60px
</style>

<template>
    <Modal v-model="isShow" :closable="false" :footer-hide="true" :width="400" @on-cancel="cancel">
        <h1 class="tips">账户密码登录</h1>
        <div class="form">
            <Input v-model="account" placeholder="账户" style="width:250px;" size="large" :clearable="true" autocomplete="on" class="input-css"></Input>
            <Input v-model="password" placeholder="密码" style="width:250px;" size="large" type="password" class="input-css"></Input>
            <Checkbox v-model="seven" class="input-css">七天内自动登录</Checkbox>
            <Button type="primary" long class="button-css" style="width:250px;" size="large" @click="login">登录</Button>
        </div>

    </Modal>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
    name: "",
    components: {},
    data() {
        return {
            isShow: false,
            account: "",
            password: "",
            seven: false
        };
    },
    computed: {},
    methods: {
        login() {
            $.ajax({
                type: "post",
                // url: "http://112.74.63.53/login/login.php",
                url: "http://172.29.37.198/school/login.php",
                data: {
                    account: this.account,
                    password: this.password
                },
                success: response => {
                    if (response != "") {
                        if (this.seven == true) {
                            sessionStorage.setItem("account", this.account);
                            Cookies.set("Tooken", this.account, { expires: 7 });
                        } else {
                            sessionStorage.setItem("account", this.account);
                        }

                        this.isShow = false;
                        this.$Modal.success({
                            content: "登录成功",
                            onOk: () => {
                                window.location.reload();
                            }
                        });
                    } else {
                        this.$Modal.error({
                            content: "账户密码错误"
                        });
                    }
                }
            });
        },
        cancel() {
            this.account = "";
            this.password = "";
        }
    },
    mounted() {
        this.$root.bus.$on("login", status => {
            if (status == true) {
                this.isShow = true;
            }
        });
    }
};
</script>