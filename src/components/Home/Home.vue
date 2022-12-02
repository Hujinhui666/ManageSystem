<template>
  <div>
    <el-container class="home-container">
      <!-- 头 -->
      <el-header>
        <div class="headerLeft"> 
          <h1>后台管理系统</h1>
        </div> 

        <div class="headerRight">
          <img src="@/assets/touxiang.png" class="img2" />
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="quiteLogin">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>


      </el-header>
      <el-container>
        <!-- 侧边 -->
        <el-aside :width="isCollapse ? '64px' : '250px'">
          <!-- 展示与折叠 -->
          <el-radio-group v-model="isCollapse">
            <div class="isCollapseBtn"
              :class="{ 'animate__animated animate__rubberBand': isCollapse, 'animate__animated animate__wobble': !isCollapse }"
              @click="isCollapse = !isCollapse">
              <span class="iconfont" :class="isCollapse ? 'icon-xiangyou' : 'icon-xiangzuo'"></span>
            </div>
          </el-radio-group>
          <!-- 菜单栏 -->
          <el-menu :collapse-transition="false" :collapse="isCollapse" :default-active="activePath" :router="true" unique-opened>
            
            <el-submenu :index="i.id + ''" v-for="i in info" :key="i.id">
              <template slot="title">
                <i :class="i.ico"></i>
                <span>{{ i.authName }}</span>
              </template>
              <!-- 二级 -->
             
                <el-menu-item v-for="i2 in i.children" :key="i2.id" @click.native="saveNavState(i2.path)"
                  :index="i2.path">{{ i2.authName }}</el-menu-item>
             
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体区域 -->
        <el-main style="overflow: hidden;">
          <!-- 路由占位符 -->
          <div class="el-main1">
            <router-view />
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import 'animate.css'
export default {
  name: "Home",
  data() {
    return {
      activePath: '',
      isCollapse: false,
      info: [
        {
          id: '101',
          authName: '系统首页',
          ico: 'el-icon-house',
          children: [
            {
              id: '1',
              authName: '系统首页',
              path: '/Welcome'
            }
          ]
        },
        {
          id: '102',
          authName: '课程管理',
          ico: 'el-icon-menu',
          children: [
            {
              id: '2',
              authName: '直播',
              path: '/zhibo'
            },
            {
              id: '3',
              authName: '图文课程',
              path: '/Tupiankecheng'
            },
            {
              id: '4',
              authName: '视频课程',
              path: '/shipinkecheng'
            },
            {
              id: '5',
              authName: '音频课程',
              path: '/yinpinkecheng'
            },
            {
              id: '6',
              authName: '专栏课程',
              path: '/zhuanlankecheng'
            },
            {
              id: '7',
              authName: '课程分类',
              path: '/kechengfenlei'
            }
          ]
        },
        {
          id: '103',
          authName: '实物商品',
          ico: 'el-icon-shopping-cart-full',
          children: [
            {
              id: '8',
              authName: '商品管理',
              path: '/shangpinguanli'
            }
          ]
        },
        {
          id: '104',
          authName:'用户管理',
          ico:'el-icon-user',
          children:[
            {
            id:'9',
            authName:'用户查询',
            path:'/userQuery'
          },
            {
            id:'10',
            authName:'用户标签',
            path:'/UserLabe'
          },
            {
            id:'11',
            authName:'免费会员等级管理',
            path:'/freeVip'
          },
            {
            id:'12',
            authName:'付费会员卡管理',
            path:'/payVip'
          },
            {
            id:'13',
            authName:'会员权益',
            path:'/vip'
          },
            {
            id:'14',
            authName:'积分规则',
            path:'/pointsRules'
          },
            {
            id:'15',
            authName:'成长值规律',
            path:'/growRules'
          },
        ]
        }
      ],
    };
  },
  methods: {
    quiteLogin() {
      this.$router.push('/login')
      this.$notify.info({ title: '温馨提示', message: '退出成功' });
    }
    ,
    saveNavState(activePath) {
      // console.log("666")
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  beforeDestroy(){
    window.sessionStorage.setItem('activePath', '/Welcome')
  }
};
</script>

<style lang="less" scoped>
// 主体占百分百
.home-container {
  height: 100vh;
}

.el-header {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(91.687045764522deg,
      rgba(0, 110, 255, 1) 40%,
      rgba(24, 144, 255, 1) 100%);

  .headerLeft {
    width: 250px;
    height: auto;
    background-color: #ffffff;
    margin-left: -20px;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #0A7AFF;
    text-align: center;
    h1{
      margin-bottom: 0px;
    }
    
  }

  .headerRight {
    display: flex;
    align-items: center;

    .img2 {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }


}

.el-aside {
  background-color: white;

  .el-menu {
    border-right: 0;
  }

  .el-radio-group {
    display: block;
  }

  // 展开与折叠样式
  .isCollapseBtn {
    font-size: 23px;
    text-align: center;
    color: #ccc;
    background-color: #ffffff;
    cursor: pointer;
  }

  .isCollapseBtn:hover {
    color: pink;
    background-color: #d4237a;
    color: black;
  }
}


 
</style>
