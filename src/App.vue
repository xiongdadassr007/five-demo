<template>
    <div id="app">
        <!-- 中间部分 -->
        <router-view />

        <!-- 底部栏 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/home" replace>首页</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/mycount" replace>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import "@/assets/less/global.less"
export default {
    name: "App",
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style lang="less" scoped>

</style>
