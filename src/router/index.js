import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home/Home'
import Welcome from '../components/Home/Welcome'
import Shipinkecheng from "../components/courseManage/Shipinkecheng";
import zhibo from "../components/courseManage/zhibo";
import Tupiankecheng from "../components/courseManage/Tupiankecheng";
import Yinpinkecheng from "../components/courseManage/Yinpinkecheng";
import zhuanlankecheng from "../components/courseManage/zhuanlankecheng";
import Kechengfenlei from "../components/courseManage/Kechengfenlei";
import Shangpinguanli from "../components/physicalGoods/Shangpinguanli"
import UserQuery from "@/components/userManage/UserQuery"
import FreeVip from "@/components/userManage/FreeVip"
import UserLabe from "@/components/userManage/UserLabe"
import PayVip from "@/components/userManage/PayVip"
import GrowRules from "@/components/userManage/GrowRules"
import PointsRules from "@/components/userManage/PointsRules"
import Vip from "@/components/userManage/Vip"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 主页面
    {
      path: '/home',
      component: Home,
      redirect: '/Welcome',
      // 子路由
      children: [
        { path: '/Welcome', component: Welcome },
        { path: '/zhibo', component: zhibo },
        { path: '/tupiankecheng', component: Tupiankecheng },
        { path: '/shipinkecheng', component: Shipinkecheng },
        {path:'/yinpinkecheng', component: Yinpinkecheng},
        {path:'/zhuanlankecheng', component: zhuanlankecheng},
        {path:'/kechengfenlei', component: Kechengfenlei},
        {path:'/shangpinguanli', component: Shangpinguanli},
        {path:'/userQuery', component: UserQuery},
        {path:'/userLabe', component: UserLabe},
        {path:'/freeVip', component: FreeVip},
        {path:'/payVip', component: PayVip},
        {path:'/growRules', component: GrowRules},
        {path:'/pointsRules', component: PointsRules},
        {path:'/vip', component: Vip},

      ]
    }
  ]
})
// 路由守卫

export default router
