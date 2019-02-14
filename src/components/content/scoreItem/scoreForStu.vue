<style lang='stylus'>
.finalFormStu
    //position absolute
    width 700px
    height 200px

    .final-top
        display flex
        justify-content space-around
        margin-bottom 10px
        font-size 16px

    .stu-class
        width 700px
        height 30px
        margin 20px 0

        .hint-class
            line-height 28px
            margin-left 220px
            font-size 16px
            display inline-block

        .choose-class
            width 150px
            line-height 30px
            padding 0 4px
            border 1px solid #dcdee2
            border-radius 4px
            user-select none
            display inline-block

        .show-class
            margin-left 10px
            display inline-block

.ivu-dropdown .ivu-select-dropdown
    max-width 150px
</style>

<template>
    <div class="finalFormStu">
        <div class="final-top ">
            <p>您正在查询的是：<span style="font-weight:bold">2018-2019学年度春季期末考试成绩(学生端)</span> </p>
        </div>
        <div class="stu-class">
            <div class="hint-class">请选择班别：</div>
            <div class="choose-class">
                <Dropdown trigger="click" @on-click="showClass">
                    班别
                    <Icon type="ios-arrow-down" style="margin-left:100px"></Icon>
                    <DropdownMenu slot="list" style="min-width:150px；">
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                一年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="一（1）班">一（1）班</DropdownItem>
                                <DropdownItem name="一（2）班">一（2）班</DropdownItem>
                                <DropdownItem name="一（3）班">一（3）班</DropdownItem>
                                <DropdownItem name="一（4）班">一（4）班</DropdownItem>
                                <DropdownItem name="一（5）班">一（5）班</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                二年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="二（1）班">二（1）班</DropdownItem>
                                <DropdownItem name="二（2）班">二（2）班</DropdownItem>
                                <DropdownItem name="二（3）班">二（3）班</DropdownItem>
                                <DropdownItem name="二（4）班">二（4）班</DropdownItem>
                                <DropdownItem name="二（5）班">二（5）班</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                三年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="三（1）班">三（1）班</DropdownItem>
                                <DropdownItem name="三（2）班">三（2）班</DropdownItem>
                                <DropdownItem name="三（3）班">三（3）班</DropdownItem>
                                <DropdownItem name="三（4）班">三（4）班</DropdownItem>
                                <DropdownItem name="三（5）班">三（5）班</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                四年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="四（1）班">四（1）班</DropdownItem>
                                <DropdownItem name="四（2）班">四（2）班</DropdownItem>
                                <DropdownItem name="四（3）班">四（3）班</DropdownItem>
                                <DropdownItem name="四（4）班">四（4）班</DropdownItem>
                                <DropdownItem name="四（5）班">四（5）班</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                五年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="五（1）班">五（1）班</DropdownItem>
                                <DropdownItem name="五（2）班">五（2）班</DropdownItem>
                                <DropdownItem name="五（3）班">五（3）班</DropdownItem>
                                <DropdownItem name="五（4）班">五（4）班</DropdownItem>
                                <DropdownItem name="五（5）班">五（5）班</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown placement="right-start">
                            <DropdownItem>
                                六年级
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu slot="list">
                                <DropdownItem name="六（1）班">六（1）班</DropdownItem>
                                <DropdownItem name="六（2）班">六（2）班</DropdownItem>
                                <DropdownItem name="六（3）班">六（3）班</DropdownItem>
                                <DropdownItem name="六（4）班">六（4）班</DropdownItem>

                            </DropdownMenu>
                        </Dropdown>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="show-class">{{model}}</div>
        </div>

        <div class=" stu-class">
            <div class="hint-class">请输入名字：</div>
            <div style="display:inline-block;width:150px;font-size:16px">
                <Input prefix="ios-contact" v-model="stuName" :maxlength="15"></Input>
            </div>
        </div>
        <Button type="primary" shape="circle" style="margin:15px 0 0 320px;width:70px" @click="comfirm">确定</Button>
        <Modal v-model="modal" @on-cancel="ok" @on-ok="ok" ok-text="确认" cancel-text="" title="成绩：" :width="850">
            <Table :columns="columns" :data="data"></Table>
        </Modal>
        <Modal v-model="modal2" @on-cancel="ok2" @on-ok="ok2" ok-text="确认" cancel-text="" title="成绩：" :width="850">
            <Table :columns="columns2" :data="data2"></Table>
        </Modal>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            model: "",
            stuName: "",
            modal: false,
            modal2: false,
            columns: [
                {
                    title: "姓名",
                    key: "name"
                },
                {
                    title: "班别",
                    key: "class"
                },
                {
                    title: "语文",
                    key: "chinese"
                },

                {
                    title: "英语",
                    key: "english"
                },
                {
                    title: "数学",
                    key: "math"
                },
                {
                    title: "总分",
                    key: "totalscore"
                },
                {
                    title: "班级排名",
                    key: "classrank"
                },
                {
                    title: "年级排名",
                    key: "schoolrank"
                }
            ],
            columns2: [
                {
                    title: "姓名",
                    key: "name"
                },
                {
                    title: "班别",
                    key: "class"
                },
                {
                    title: "语文",
                    key: "chinese"
                },
                {
                    title: "数学",
                    key: "math"
                },
                {
                    title: "总分",
                    key: "totalscore"
                },
                {
                    title: "班级排名",
                    key: "classrank"
                },
                {
                    title: "年级排名",
                    key: "schoolrank"
                }
            ],
            data: [],
            data2: []
        };
    },
    computed: {},
    methods: {
        showClass(name) {
            if (name) {
                this.model = name;
            }
        },
        comfirm() {
            if (!this.model) {
                this.$Message.error("请选择年级！");
                return;
            }
            if (!this.stuName) {
                this.$Message.error("请输入姓名！");
                return;
            }
            // 防止sql注入;
            let re = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
            if (re.test(this.stuName)) {
                this.$Modal.warning({
                    title: "提示：",
                    content: "请不要输入特殊字符"
                });
                this.stuName = "";
                return;
            }
            let grade = this.model.slice(0, 1);
            if (grade == "一") grade = "firstgrade";
            else if (grade == "二") grade = "secondgrade";
            else if (grade == "三") grade = "thirdgrade";
            else if (grade == "四") grade = "fourthgrade";
            else if (grade == "五") grade = "fifthgrade";
            else if (grade == "六") grade = "sixthgrade";
            let postData = {
                name: this.stuName,
                class: this.model.slice(0, 4),
                grade: grade
            };
            if (postData != undefined) {
                $.ajax({
                    type: "post",
                    url: "http://192.168.1.105/school/searchSimpleData.php",
                    data: postData,
                    success: htmltxt => {
                        if (htmltxt) {
                            let getArr = htmltxt.split(",");
                            if (
                                grade == "firstgrade" ||
                                grade == "secondgrade"
                            ) {
                                this.data2.push({
                                    name: getArr[0],
                                    class: getArr[1],
                                    // room: getArr[2],
                                    // seat: getArr[3],
                                    chinese: getArr[2],
                                    math: getArr[3],
                                    totalscore: getArr[4],
                                    classrank: getArr[5],
                                    schoolrank: getArr[6]
                                });
                                this.modal2 = true;
                            } else {
                                this.data.push({
                                    name: getArr[0],
                                    class: getArr[1],
                                    // room: getArr[2],
                                    // seat: getArr[3],
                                    chinese: getArr[2],
                                    english: getArr[4],
                                    math: getArr[3],
                                    totalscore: getArr[5],
                                    classrank: getArr[6],
                                    schoolrank: getArr[7]
                                });
                                this.modal = true;
                            }
                        } else {
                            this.$Modal.error({
                                title: "提示：",
                                content: "查询不到此人"
                            });
                        }
                    },
                    error: htmltxt => {
                        this.$Modal.error({
                            title: "提示：",
                            content: "查询失败"
                        });
                    }
                });
            }
        },
        ok() {
            this.data.splice(0, 1);
        },
        ok2() {
            this.data2.splice(0, 1);
        }
    }
};
</script>