<template>
    <div class="home-container">
        <!-- 头部栏 -->
        <van-nav-bar title="XX头条" fixed />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="isDisabled">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <NewsList
                    v-for="(item, index) in initData"
                    :key="index"
                    :list-title="item.title"
                    :list-img="item.cover"
                    :list-author="item.aut_name"
                    :list-commit="item.comm_count"
                    :list-date="item.pubdate"
                >
                </NewsList>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import NewsList from "@/components/NewsList.vue";
import { getData } from "@/assets/api/manage.js";
export default {
    name: "Home",
    components: {
        NewsList,
    },
    data() {
        return {
            // 初始化数据相关
            initData: [],
            page: 1,
            limit: 10,
            // 下拉加载更多相关
            loading: true,
            finished: false,
            // 下拉刷新
            refreshing: false,
            isDisabled: false
        };
    },
    methods: {
        // 定义获取初始化数据方法
        async getinitData() {
            let { data: res } = await getData(this.page, this.limit);
            // console.log(res);
            this.initData = res;
            // 为防止刚进入页面loading就自动执行一次
            this.loading = false;
        },
        // 定义下拉加载更多方法
        async onLoad() {
            this.page++;
            let { data: res } = await getData(this.page, this.limt);
            this.initData = [...this.initData, ...res];
            this.loading = false;
            if (res.length === 0) {
                this.finished = true;
            }
        },
        // 定义下拉刷新方法
        async onRefresh() {
            this.page++
            let { data: res } = await getData(this.page, this.limt);
            this.initData = [...res, ...this.initData];
            this.refreshing = false
            if (res.length === 0) {
                this.isDisabled = true;
            }
        }
    },
    created() {
        this.getinitData();
    },
};
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
    padding-top: 45px;
    .van-list {
        padding-bottom: 50px;
    }
}
</style>