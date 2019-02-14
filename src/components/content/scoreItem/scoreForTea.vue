<style lang='stylus'>
.finalFormTea
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

.totalAna
    overflow-y auto
    overflow-x hidden
    width 750px
    height 460px

    .everyAna
        width 700px
        height 450px
        margin-bottom 10px
</style>

<template>
    <div class="finalFormTea">
        <div class="final-top ">
            <p>您正在查询的是：<span style="font-weight:bold">2018-2019学年度春季期末考试成绩(教师端)</span> </p>
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
        <Button type="primary" shape="circle" style="margin:15px 0 0 260px;width:90px;display:inline-block" @click="comfirm">查询成绩</Button>
        <Button type="primary" shape="circle" style="margin:15px 0 0 30px;width:90px;display:inline-block" @click="analysis">分析报告</Button>

        <Modal v-model="modal" @on-cancel="cancel" @on-ok="ok" ok-text="导出为Excel" cancel-text="返回" title="成绩：" :width="900" :draggable="true">
            <Table :columns="columns" :data="data" ref="table" :height="440" :width="850" style="display:inline-block"></Table>
        </Modal>
        <Modal v-model="modal2" @on-cancel="cancel2" @on-ok="ok2" cancel-text="返回" ok-text="导出为Excel" title="成绩：" :width="900" :draggable="true">
            <Table :columns="columns2" ref="table2" :data="data2" :height="440" :width="850"> </Table>
        </Modal>
        <Modal v-model="modal3" :scrollable="false" @on-cancel="ok3" @on-ok="ok3" cancel-text="" ok-text="返回" title="分析报告：" :width="800" :draggable="true">
            <div class="totalAna">
                <div class="everyAna">
                    <div style="width:800px;height:450px;" id="analysis1"></div>
                </div>
                <div class="everyAna">

                    <div style="width:800px;height:430px;" id="analysis2"></div>
                </div>
                <div class="everyAna">
                    <div style="width:800px;height:430px;" id="analysis3"></div>
                </div>
            </div>

        </Modal>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "",
    components: {},
    data() {
        return {
            model: "",
            modal: false,
            modal2: false,
            modal3: false,
            firPre: 0,
            secPre: 0,
            thrPre: 0,
            fouPre: 0,
            fifPre: 0,
            firPre2: 0,
            secPre2: 0,
            thrPre2: 0,
            fouPre2: 0,
            fifPre2: 0,
            firPre3: 0,
            secPre3: 0,
            thrPre3: 0,
            fouPre3: 0,
            fifPre3: 0,

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
        analysis() {
            if (!this.model) {
                this.$Message.error("请选择年级！");
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
                class: this.model.slice(0, 4),
                grade: grade
            };
            this.modal3 = true;
            $.ajax({
                type: "post",
                url: "http://192.168.1.105/school/anaClassData.php",
                data: postData,
                success: htmltxt => {
                    if (htmltxt) {
                        let getArr = htmltxt.split(",");
                        this.firPre = getArr[0];
                        this.secPre = getArr[1];
                        this.thrPre = getArr[2];
                        this.fouPre = getArr[3];
                        this.fifPre = getArr[4];
                        var eComVisitChart = echarts.init(
                            document.getElementById("analysis1")
                        );
                        var option = {
                            title: {
                                text: "本班成绩各分段占比",
                                y: "center"
                            },
                            color: [
                                "#238BD4",
                                "#A0D677",
                                "#FCC652",
                                "#74BFE7",
                                "#E27561",
                                "#338FDE",
                                "#37ADE5",
                                "#A6D3E4",
                                "#3B7AAE"
                            ],
                            tooltip: {
                                trigger: "item",
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: "center",
                                y: "bottom",
                                data: [
                                    "1-10名",
                                    "11-30名",
                                    "31-50名",
                                    "50-100名",
                                    "100名以后"
                                ]
                            },
                            series: [
                                {
                                    name: "年级占比",
                                    type: "pie",
                                    radius: "60%",
                                    center: ["50%", "50%"],
                                    data: [
                                        {
                                            value: this.firPre,
                                            name: "1-10名"
                                        },
                                        {
                                            value: this.secPre,
                                            name: "11-30名"
                                        },
                                        {
                                            value: this.thrPre,
                                            name: "31-50名"
                                        },
                                        {
                                            value: this.fouPre,
                                            name: "50-100名"
                                        },
                                        {
                                            value: this.fifPre,
                                            name: "100名以后"
                                        }
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }
                            ]
                        };
                        eComVisitChart.setOption(option);
                        window.addEventListener("resize", () => {
                            setTimeout(() => {
                                eComVisitChart.resize();
                            }, 500);
                        });
                    } else {
                    }
                },
                error: htmltxt => {
                    this.$Modal.error({
                        title: "提示：",
                        content: "查询失败"
                    });
                }
            });
            let postData1 = {
                class: this.model.slice(0, 1),
                grade: grade
            };
            console.log(grade);
            $.ajax({
                type: "post",
                url: "http://192.168.1.105/school/topTwenty.php",
                data: postData1,
                success: htmltxt => {
                    console.log(htmltxt);
                    if (htmltxt) {
                        let getArr = htmltxt.split(",");
                        this.firPre2 = getArr[0];
                        this.secPre2 = getArr[1];
                        this.thrPre2 = getArr[2];
                        this.fouPre2 = getArr[3];
                        this.fifPre2 = getArr[4];
                        var eComVisitChart = echarts.init(
                            document.getElementById("analysis2")
                        );
                        var option = {
                            title: {
                                text: "年级排名前20名各班占比",
                                y: "center"
                            },
                            color: [
                                "#238BD4",
                                "#A0D677",
                                "#FCC652",
                                "#74BFE7",
                                "#E27561",
                                "#338FDE",
                                "#37ADE5",
                                "#A6D3E4",
                                "#3B7AAE"
                            ],
                            tooltip: {
                                trigger: "item",
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: "center",
                                y: "bottom",
                                data: ["一班", "二班", "三班", "四班", "五班"]
                            },
                            series: [
                                {
                                    name: "各班占比",
                                    type: "pie",
                                    radius: "60%",
                                    center: ["50%", "50%"],
                                    data: [
                                        {
                                            value: this.firPre2,
                                            name: "一班"
                                        },
                                        {
                                            value: this.secPre2,
                                            name: "二班"
                                        },
                                        {
                                            value: this.thrPre2,
                                            name: "三班"
                                        },
                                        {
                                            value: this.fouPre2,
                                            name: "四班"
                                        },
                                        {
                                            value: this.fifPre2,
                                            name: "五班"
                                        }
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }
                            ]
                        };
                        eComVisitChart.setOption(option);
                        window.addEventListener("resize", () => {
                            setTimeout(() => {
                                eComVisitChart.resize();
                            }, 500);
                        });
                    } else {
                    }
                },
                error: htmltxt => {
                    this.$Modal.error({
                        title: "提示：",
                        content: "查询失败"
                    });
                }
            });
            $.ajax({
                type: "post",
                url: "http://192.168.1.105/school/TwentyToFiften.php",
                data: postData1,
                success: htmltxt => {
                    if (htmltxt) {
                        let getArr = htmltxt.split(",");
                        this.firPre3 = getArr[0];
                        this.secPre3 = getArr[1];
                        this.thrPre3 = getArr[2];
                        this.fouPre3 = getArr[3];
                        this.fifPre3 = getArr[4];
                        var eComVisitChart = echarts.init(
                            document.getElementById("analysis3")
                        );
                        var option = {
                            title: {
                                text: "年级排名20-50名各班占比",
                                y: "center"
                            },
                            color: [
                                "#238BD4",
                                "#A0D677",
                                "#FCC652",
                                "#74BFE7",
                                "#E27561",
                                "#338FDE",
                                "#37ADE5",
                                "#A6D3E4",
                                "#3B7AAE"
                            ],
                            tooltip: {
                                trigger: "item",
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: "center",
                                y: "bottom",
                                data: ["一班", "二班", "三班", "四班", "五班"]
                            },
                            series: [
                                {
                                    name: "各班占比",
                                    type: "pie",
                                    radius: "60%",
                                    center: ["50%", "50%"],

                                    data: [
                                        {
                                            value: this.firPre3,
                                            name: "一班"
                                        },
                                        {
                                            value: this.secPre3,
                                            name: "二班"
                                        },
                                        {
                                            value: this.thrPre3,
                                            name: "三班"
                                        },
                                        {
                                            value: this.fouPre3,
                                            name: "四班"
                                        },
                                        {
                                            value: this.fifPre3,
                                            name: "五班"
                                        }
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }
                            ]
                        };
                        eComVisitChart.setOption(option);
                        window.addEventListener("resize", () => {
                            setTimeout(() => {
                                eComVisitChart.resize();
                            }, 500);
                        });
                    } else {
                    }
                },
                error: htmltxt => {
                    this.$Modal.error({
                        title: "提示：",
                        content: "查询失败"
                    });
                }
            });
        },
        comfirm() {
            if (!this.model) {
                this.$Message.error("请选择班级！");
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
                class: this.model.slice(0, 4),
                grade: grade
            };
            if (postData != undefined) {
                $.ajax({
                    type: "get",
                    url: "http://192.168.1.105/school/searchClassData.php",
                    dataType: "jsonp",
                    jsonp: "callback", //请求类型是回调
                    data: postData,

                    success: htmltxt => {
                        // let getArr = htmltxt.split(" ");
                        console.log(htmltxt);
                        if (htmltxt) {
                            let getArr = htmltxt;
                            if (
                                grade == "firstgrade" ||
                                grade == "secondgrade"
                            ) {
                                let itemNum = getArr.length - 6;
                                for (let i = 0; i < itemNum; i += 6)
                                    this.data2.push({
                                        name: getArr[i],
                                        class: getArr[i + 1],
                                        // room: getArr[2],
                                        // seat: getArr[3],
                                        chinese: getArr[i + 2],
                                        math: getArr[i + 3],
                                        totalscore: getArr[i + 4],
                                        // classrank: getArr[5],
                                        schoolrank: getArr[i + 5]
                                    });
                                this.modal2 = true;
                            } else {
                                let itemNum = getArr.length - 7;
                                for (let i = 0; i < itemNum; i += 7)
                                    this.data.push({
                                        name: getArr[i],
                                        class: getArr[i + 1],
                                        // room: getArr[2],
                                        // seat: getArr[3],
                                        chinese: getArr[i + 2],
                                        english: getArr[i + 4],
                                        math: getArr[i + 3],
                                        totalscore: getArr[i + 5],
                                        // classrank: getArr[6],
                                        schoolrank: getArr[i + 6]
                                    });
                                this.modal = true;
                            }
                        } else {
                            this.$Modal.error({
                                title: "提示：",
                                content: "查询班级成绩错误"
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
            this.$refs.table.exportCsv({
                filename: "期末考试成绩"
            });
            this.data.splice(0);
        },
        cancel() {
            this.data.splice(0);
        },
        ok2() {
            this.$refs.table2.exportCsv({
                filename: "期末考试成绩"
            });
            this.data2.splice(0);
        },
        cancel2() {
            this.data2.splice(0);
        },
        ok3() {
            this.modal3 = false;
        }
    },
    mounted() {}
};
</script>