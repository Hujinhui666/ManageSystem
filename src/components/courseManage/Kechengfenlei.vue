<template>
    <div>
        <!-- 封装好的 卡片 头部 -->
        <!-- 卡片区域 头部 -->
        <el-card class="box-card" :body-style="{ padding: '15px' }">

            <children-header :info="infoMsg">
                <template slot="content">
                    <el-divider></el-divider>
                    <div class="box1">
                        <div class="box_1_2">
                            <p><span>分类课程</span></p>
                            <el-input style="width:223px;" v-model="zhibovalue" placeholder="请输入"></el-input>
                        </div>
                        <div class="box2_btn">
                            <el-button type="primary">查询</el-button>
                            <el-button>重置</el-button>
                        </div>
                    </div>


                </template>
            </children-header>
        </el-card>

        <!-- 主体区域 -->
        


    </div>
</template>

<script>
import ChildrenHeader from '@/view/ChildrenHeader.vue'
export default {
    components: { ChildrenHeader },
    name: 'Kechengfenlei',
    data() {
        return {
            infoMsg: [{ title1: '课程管理', title2: '课程分类' }],
            zhibovalue:''
        }
    }

}
</script>

<style lang="less" scoped>
.box1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box_1_2 {
        display: flex;
        width: 25%;
        padding-left: 20px;
        justify-content: space-around;
        align-items: center;
    }

    .box2_btn {
        padding-right: 5%;
    }
}
</style>