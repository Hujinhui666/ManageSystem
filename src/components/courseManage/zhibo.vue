<template>
  <div>
    <!-- 封装好的 卡片 头部 -->
    <!-- 卡片区域 头部 -->
    <el-card class="box-card" :body-style="{ padding: '15px' }">

      <children-header :info="infoMsg">
        <!-- 插槽 -->
        <template slot="content">
          <el-divider></el-divider>
          <!--  卡片1 底部 -->
          <div class="box_1">
            <!-- 直播状态 直播名称 -->
            <div class="box_1parent">
              <!-- 直播状态 -->
              <div class="box_1_1">
                <span>直播状态</span>
                <el-select v-model="box_1value" placeholder="请选择">
                  <el-option v-for="item in box_1values" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <!-- 直播名称 -->
              <div class="box_1_2">
                <p><span>直播名称</span></p>
                <el-input style="width:223px;" v-model="zhibovalue" placeholder="请输入"></el-input>
              </div>
            </div>

            <!-- 开始日期  和按钮-->
            <div class="box_2">
              <div class="box_2parent">
                <div class="box2_date">
                  <span>开始日期</span>
                  <el-date-picker v-model="box_date" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                  <div class="text_btn">
                    <el-button type="text">今日</el-button>
                    <el-button type="text">昨日</el-button>
                    <el-button type="text">最近7天</el-button>
                    <el-button type="text">最近30天</el-button>
                  </div>
                </div>
                <!-- 按钮 -->
                <div class="box2_btn">
                  <el-button type="primary">查询</el-button>
                  <el-button>重置</el-button>
                </div>
              </div>

            </div>

          </div>
        </template>

      </children-header>
    </el-card>

    <!-- 主体区域 -->
    <div class="main_body">
      <!-- 头部 -->
      <div class="main_body_head">
        <span>专栏列表</span>
        <!-- 按钮区域 -->
        <div class="main_body_headBtn">
          <el-button type="primary">+新建</el-button>
          <el-button>批量操作</el-button>
        </div>
      </div>
      <!-- 内容 -->
      <div class="main_content">
        <el-table :data="table_msg" style="width: 100%" stripe :header-cell-style="{ background: '#f9f9f9' }">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column prop="msg" label="直播信息" width="270">
            <template slot-scope="scope">
              <div class="msg_box">
                <div>
                  <img :src="scope.row.pic">
                </div>
                <span>{{ scope.row.msg }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="status" align="center" label="直播状态" width="110">
          </el-table-column>
          <el-table-column prop="num" label="预约人数" width="110">
          </el-table-column>
          <el-table-column  label="商品状态" width="110">
            <template slot-scope="scope">
              <span class="statusColor">{{scope.row.goodsStatus}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="startTime" label="开始时间" width="185">
          </el-table-column>
          <el-table-column prop="sortNum" label="排序号" width="100">
          </el-table-column>
          <el-table-column prop="sortNum" label="操作">
            <template>
              <div>
                <el-button type="text">数据</el-button>
                <el-button type="text">编辑</el-button>
                <el-button type="text">下架</el-button>
                <el-button type="text">删除</el-button>
              </div>
            </template>
          </el-table-column>

        </el-table>
      </div>

      <!-- 页脚 -->
      <div class="footer">
        <el-pagination background :page-sizes="[100, 200, 300, 400]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script>
import ChildrenHeader from '@/view/ChildrenHeader.vue';
export default {
  name: 'zhibo',
  components: { ChildrenHeader },
  data() {
    return {
      infoMsg: [{ title1: '课程管理', title2: '直播' }],
      box_1value: '',
      zhibovalue: '',
      box_date: '',
      box_1values: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '未开始'
      }, {
        value: '选项3',
        label: '进行中'
      }, {
        value: '选项4',
        label: '进行中'
      }, {
        value: '选项5',
        label: '已结束'
      }],
      // 直播列表
      table_msg: [
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },

        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
        {
          msg: '德语入门直播课',
          pic: '	https://cdn3.axureshop.com/demo/1903216/images/%E7%9B%B4%E6%92%AD/u802.png',
          status: '未开始',
          num: 300,
          goodsStatus: '已上架',
          startTime: '2020/09/08 10:45',
          sortNum: 10
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 选择框区域 直播名称
.box_1 {
  padding-left: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: column;

  // box1 直播状态和直播名称
  .box_1parent {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .box_1_1 {
      display: flex;
      width: 28%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

    .box_1_2 {
      display: flex;
      width: 28%;
      padding-right: 155px;
      justify-content: space-evenly;
      align-items: center;
    }

    .box2 {
      width: 100%;

      .box2_date {
        display: flex;
      }

    }
  }

  //box2 开始日期 按钮
  .box_2parent {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .box2_date {
      width: 68%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .text_btn {
        width: 350px;

        .el-button {
          font-weight: 400;
          font-style: normal;
          color: rgba(0, 0, 0, 0.647058823529412);
        }

      }
    }

    .box2_btn {
      padding-right: 40px;
    }
  }
}

// 内容区域
.main_body {

  width: 100%;
  display: flex;
  background-color: #fff;
  margin-top: 25px;
  flex-direction: column;
  // 解决padding撑大盒子
  padding: 0px 20px;
  box-sizing: border-box;

  // 内容区域头部
  .main_body_head {

    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
    }

  }

  // 内容区
  .main_content {

    // 图片 文字插槽 样式
    .msg_box {
      display: flex;
      align-items: center;
      // justify-content: space-between;

      img {
        width: 63px;
        height: 40px;
        background-size: cover;
        background-repeat: no-repeat;


      }

      span {
        color: #1890FF;
        font-size: 14px;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }

    // 第五列 的字体颜色
      .statusColor {
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #09CD8A;
      }

  }

  // 页脚
  .footer {
    height: 50px;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>

