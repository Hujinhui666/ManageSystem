<template>
            <!-- 面包屑-->
            <div   class="clearfix">
                <!-- 面包屑 -->
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/Welcome' }">系统首页</el-breadcrumb-item>
                    <el-breadcrumb-item> {{info[0].title1}} </el-breadcrumb-item>
                    <el-breadcrumb-item>{{info[0].title2}}</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 标题 -->
                <div>
                    <p id="u98"><span id="cache1">{{info[0].title2}}</span></p>
                </div>

               <slot name="content"></slot>
            </div>
                          
</template>

<script>
export default {
    name: 'ChildrenHeader',
    props: ['info'],
}
</script>

<style lang="less" scoped>

</style>