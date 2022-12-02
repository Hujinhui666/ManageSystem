<template>
    <div>
        <!-- 头 -->
        <el-container>
            <el-header>
                <p class="s1"><span>系统首页</span></p>
                <p class="s2"><span>更新时间：2022/10/31 10:00</span></p>
            </el-header>
        </el-container>

        <!-- 圆盒 -->
        <div class="box_1">
            <span class="box_2" v-for="(i, index) in info" :key="index"
                :style="{ background: 'url(' + i.pic + ')', backgroundSize: '100% 100%' }">
                <p>{{ i.title }}</p>
                <h2>{{ i.number }}</h2>
                <p>较昨日&nbsp;<img class="box_img" :src="i.icons" />&nbsp;&nbsp;{{ i.precent }}</p>
            </span>
        </div>

        <!-- 条形图1-->
        <div class="tiaoxingtu1">
            <div class="play_text">
                <p><span>支付金额</span></p>
            </div>
            <div class="tiaoxingtu1_box2">
                <div class="todayPlay">
                    <p class="p1"><span>今日支付金额</span></p>
                    <p style="font-size:20px"><span>6100,00</span></p>
                </div>
                <div class="yesterdayPlay">
                    <p class="p1"><span>昨日支付金额</span></p>
                    <p style="font-size:20px"><span>549,00</span></p>
                </div>
            </div>
            <div id="echarts_1"></div>
        </div>

        <div class="footer">
            <div class="left">
                <!-- 快速操作 -->
                <el-card class="box-card quickOperation" :body-style="{ padding: '5px' }">
                    <div class="play_text">
                        <p><span>快速操作</span></p>
                    </div>
                    <!-- 左盒子1 -->
                    <div class="left1">
                        <div v-for="ii, index in quickOperationUI" :key="index" class="item">
                            <div class="box_1_1"
                                :style="{ background: 'url(' + ii.pic + ') no-repeat center', backgroundSize: '50% 50%' }"
                                @click="operation('item' + index)"></div>
                            <span>{{ ii.title }}</span>
                        </div>
                    </div>

                </el-card>

                <!-- 左盒子2 -->
                <el-card class="box-card salesCourse" :body-style="{ padding: '5px' }">
                    <div class="play_text">
                        <p><span>销售量TOP5课程</span></p>
                    </div>

                    <!-- Table -->
                    <el-table :data="table_msg" style="width: 100%" stripe
                        :header-cell-style="{ background: '#f9f9f9' }" height="400px">
                        <el-table-column type="index" label="排名">
                        </el-table-column>
                        <el-table-column prop="msg" label="课程信息" width="255">
                            <template slot-scope="scope">
                                <div class="left2_box1">
                                    <div>
                                        <img :src="scope.row.pic" style="width:58px; height:40px" />
                                    </div>
                                    <span>{{ scope.row.msg }}</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="money" label="价格">
                        </el-table-column>
                        <el-table-column prop="p" label="支付量">
                        </el-table-column>
                        <el-table-column prop="percent" label="状态">
                        </el-table-column>
                    </el-table>

                </el-card>
            </div>
            <div class="right">
                <!-- 实时学习人数(元) 折线图-->
                <div id="realTime" class="realTime">777</div>

                <!-- 圆饼形 -->
                <div id="newVisit" class="newVisit">777</div>

            </div>


        </div>


    </div>
</template>

<script>
import { operation } from 'retry';


export default {
    name: 'Welcome',
    data() {

        return {
            info: [
                {
                    title: '访客数',
                    number: '126,560',
                    precent: '12%',
                    pic: require('../../assets/uicon/u1.png'),
                    icons: require('../../assets/direction/xiangshang.png')
                },
                {
                    title: '付费客数',
                    number: '26,560',
                    precent: '12%',
                    pic: require('../../assets/uicon/u2.png'),
                    icons: require('../../assets/direction/xiangshang.png')
                },
                {
                    title: '浏览量',
                    number: '66,5600',
                    precent: '5%',
                    pic: require('../../assets/uicon/u3.png'),
                    icons: require('../../assets/direction/xiangshang.png')
                },
                {
                    title: '支付订单数',
                    number: '5600',
                    precent: '5%',
                    pic: require('../../assets/uicon/u4.png'),
                    icons: require('../../assets/direction/xiangxia.png')
                }
            ],
            quickOperationUI: [
                {
                    title: '用户查询',
                    pic: require('@/assets/uicon/u_user.png')
                },
                {
                    title: '发布视频课程',
                    pic: require('@/assets/uicon/u_pay.png')
                },
                {
                    title: '发布图文课程',
                    pic: require('@/assets/uicon/u_menu.png')
                },
                {
                    title: '发布音频课程',
                    pic: require('@/assets/uicon/u_mkf.png')
                },
            ],
            // 销量信息
            table_msg: [
                {
                    msg: '西班牙语0-B2高级直达',
                    pic: 'https://cdn3.axureshop.com/demo/1903216/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u765.png',
                    v: 8000,
                    p: 400,
                    percent: '5%',
                    money: 3340
                },
                {
                    msg: '西班牙语0-B2高级直达',
                    pic: 'https://cdn3.axureshop.com/demo/1903216/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u765.png',
                    v: 8000,
                    p: 400,
                    percent: '5%',
                    money: 2010
                },
                {
                    msg: '西班牙语0-B2高级直达',
                    pic: 'https://cdn3.axureshop.com/demo/1903216/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u765.png',
                    v: 8000,
                    p: 400,
                    percent: '5%',
                    money: 1230
                },
                {
                    msg: '西班牙语0-B2高级直达',
                    pic: 'https://cdn3.axureshop.com/demo/1903216/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u765.png',
                    v: 8000,
                    p: 400,
                    percent: '5%',
                    money: 1110
                },
                {
                    msg: '西班牙语0-B2高级直达',
                    pic: 'https://cdn3.axureshop.com/demo/1903216/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u765.png',
                    v: 8000,
                    p: 400,
                    percent: '5%',
                    money: 930
                },
            ],
            // /api/mock/380/order
            table_msg2: [],
            newMoney: []
        }
    },
    mounted() {
        // 获取接口数据
        this.getCount();

        this.drawChart();
        this.drawChart2();
        this.drawChart3();


    },
    methods: {
        // 折线图1
        drawChart() {
            var myChart = this.$echarts.init(document.getElementById("echarts_1"));
            var option = {
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {},
                series: [
                    {
                        data: [10, 22, 28, 23, 19],
                        type: 'line',
                        smooth: true
                    },
                    {
                        data: [20, 52, 218, 123, 119],
                        type: 'line',
                        smooth: true
                    }
                ]
            }
            myChart.setOption(option)
        },

        // 折线图2
        drawChart2() {
            let myChart = this.$echarts.init(document.getElementById("realTime"))
            let option = {
                // 表大小
                grid: {
                    x: 45,
                    x2: 20,
                    y2: 45
                },
                title: {
                    text: '实时学习人数(元)',
                    textStyle: {
                        color: '#ffffff',
                    },
                    top: '5%',
                    left: '2%'
                },
                textStyle: {
                    color: '#ffffff',
                },
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: '16'
                        }
                    }
                    ,
                    // x轴样式
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    axisLabel: {
                        textStyle: {
                            fontSize: '16'
                        }
                    },

                },
                series: [
                    {
                        data: [10, 22, 28, 23, 19],
                        type: 'line',
                        smooth: true,
                        color: '#ffffff',
                    }
                ]

            }
            myChart.setOption(option)
        },

        // 圆环图
        drawChart3() {
            let myChart = this.$echarts.init(document.getElementById('newVisit'))
            let option = {
                title: [
                    { text: '1000总访问量', left: 'center', top: 'center' },
                    {
                        text: '今日新用户访问量占比', textStyle: {
                            fontSize: '16',
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 0.847058823529412)'
                        },
                        left: '5%', top: '6%'

                    }
                ]
                ,
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 660,
                                name: '老客户'
                            },
                            {
                                value: 340,
                                name: '新客户'
                            }
                        ],
                        radius: ['40%', '70%']
                    }
                ],
                legend: { show: true, bottom: '0%' }
            };
            myChart.setOption(option)

        },

        // 快速操作 点击事件
        operation(itemMethods) {
            this[itemMethods]()
        },
        item0() {
            this.$router.push('/userQuery')
        },
        item1() {
            this.$router.push('/userQuery')
        },
        item2() {
            this.$router.push('/userQuery')
        },
        item3() {
            this.$router.push('/userQuery')
        },

        // 测试 服务器接口
        getCount() {
            // var _this = this;  提升this
            this.$axios({
                url: '/api/mock/380/order',
                methods: 'get'
            }).then((res) => {
                const {data:restult} = res.data
                // console.log(restult)
                for (let i = 0; i < restult.length; i++) {
                    if (i < 5) {
                        this.table_msg[i].money = restult[i].
                        money;
                        this.table_msg[i].msg=restult[i].
                        name;
                        this.table_msg[i].percent=restult[i].state;
                        
                    } else {
                        break;
                    }
                }

            }).catch((error) => {
                console.log(error.message);
            })

        }

    }
}
</script>

<style lang="less" scoped>
// 头部区域
.el-header {
    padding: 0;
    align-items: center;
    display: flex;

    .s1 {
        font-weight: 650;
        font-style: normal;
        font-size: 23px;
        color: rgba(0, 0, 0, 0.847058823529412);
        line-height: 10px;
    }

    .s2 {
        margin-left: 25px;
        font-weight: 400;
        font-style: normal;
        color: rgba(0, 0, 0, 0.447058823529412)
    }
}

// 圆盒子
.box_1 {
    display: flex;
    justify-content: space-between;
    top: 30px;
    position: relative;

    .box_2 {
        padding-left: 18px;
        display: block;
        width: 266px;
        height: 140px;
        border-radius: 10%;
        font-family: 'MicrosoftYaHei', 'Microsoft YaHei', sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #Ffffff;
    }

    .box_img {
        width: 10px;
        height: 10px;
    }
}

// 折线图1
.tiaoxingtu1 {

    margin: 0;
    padding-left: 19px;
    height: 531px;
    width: 98.5%;
    border-radius: 2%;
    background-color: #Ffffff;
    top: 60px;
    position: relative;
    text-align: left;

    // 支付金额标题
    .play_text {
        position: relative;
        top: 15px;
        font-family: 'PingFangSC-Medium', 'PingFang SC Medium', 'PingFang SC', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 18px;

    }

    // 今日支付 昨日支付
    .tiaoxingtu1_box2 {
        display: flex;

        .p1 {
            font-size: 14px;
            color: rgba(60, 60, 67, 0.356862745098039);
        }

        .yesterdayPlay {
            margin-left: 55px;
        }
    }


    #echarts_1 {
        width: 115%;
        height: 450px;
        position: absolute;
        bottom: 0px;
        left: -95px;
    }
}

// 底部 
.footer {
    width: 100%;
    display: flex;
    margin-top: 85px;
    flex-direction: row;
    justify-content: space-between;

    // 左侧
    .left {
        width: 48.9%;
        height: 100%;

        // 快速操作
        .quickOperation {
            height: 220px;
            width: 100%;
            border-radius: 2%;
            padding-left: 10px;

            display: flex;
            flex-direction: column;


            .left1 {
                padding-right: 10px;
                height: 100%;
                display: flex;

                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                // background-color: antiquewhite;

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .box_1_1 {
                        width: 75px;
                        height: 75px;
                        border: 3px solid;
                        border-image-source: linear-gradient(to right, #8f41e9, #578aef);
                        border-image-slice: 1;


                        span {
                            font-size: 16px;
                        }

                    }

                    .box_1_1:hover {
                        cursor: pointer;
                    }
                }

            }

        }

        // 销售量
        .salesCourse {
            margin-top: 20px;
            height: 469px;
            width: 100%;
            border-radius: 2%;
            padding-left: 10px;



            // 图片与简述
            .left2_box1 {
                display: flex;
                align-items: center;

                gap: 10px;
            }

        }


    }

    .right {
        width: 48.9%;
        right: 0;

        .realTime {
            height: 300px;
            // background-color: green;
            background: url(@/assets/uicon/u1.png) no-repeat;
            background-size: cover;
            border-radius: 2%;

        }

        .newVisit {
            margin-top: 20px;
            height: 386px;
            background-color: #fff;
            border-radius: 2%;
        }
    }
}
</style>