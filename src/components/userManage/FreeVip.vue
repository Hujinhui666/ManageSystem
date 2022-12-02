<template>
     <div>
        <!-- 封装好的 卡片 头部 -->
        <!-- 卡片区域 头部 -->
        <el-card class="box-card" :body-style="{ padding: '15px' }">

            <children-header :info="infoMsg">
                <!-- 插槽 -->

            </children-header>
        </el-card>

    </div>
</template>

<script>
import ChildrenHeader from '@/view/ChildrenHeader.vue';
export default {
    name: 'FreeVip',
    components: { ChildrenHeader },
    data () {
        return {
            infoMsg:[{title1:'用户管理',title2:'免费会员等级管理'}]
        }
    }
}
</script>

<style>

</style>