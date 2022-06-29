<template>
    <van-cell class="container">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <div class="container-main">
                <span class="custom-title">{{ listTitle }}</span>
                <img
                    :src="listImg.images[0]"
                    alt=""
                    v-if="listImg.type === 1"
                />
            </div>
            <div class="container-pic" v-if="listImg.type === 3">
                <!-- <img :src="listImg.images[0]" alt="" />
                <img :src="listImg.images[1]" alt="" />
                <img :src="listImg.images[2]" alt="" /> -->

                <!-- v-for简写 -->
                <img :src="item" alt="" v-for="(item, index) in listImg.images" :key="index"/>
            </div>
        </template>
        <template #label>
            <span>作者 {{ listAuthor }}</span
            >&nbsp;&nbsp;<span>{{ listCommit }} 评论</span>&nbsp;&nbsp;<span
                >发布日期 {{ listDate }}</span
            >
        </template>
    </van-cell>
</template>

<script>
export default {
    name: "NewsList",
    props: {
        listTitle: {
            type: String,
        },
        listImg: {
            type: Object,
        },
        listAuthor: {
            type: String,
        },
        listCommit: {
            type: Number,
        },
        listDate: {
            type: String,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.container {
    // 单元格cell最好不要设置高度，让其自适应
    // height: 20%;
    .container-main {
        display: flex;
        justify-content: space-between;
    }
    .container-pic {
        display: flex;
        justify-content: space-between;
    }
}

img {
    height: 85px;
}
</style>