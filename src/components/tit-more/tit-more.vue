<template>
    <view class="tit-more">
        <view class="tit">
            <slot></slot>
        </view>
        <navigator
            v-if="more"
            :url="more">更多&lt;</navigator>
    </view>
</template>
<script>
export default {
    props: {
        tit: String,
        more: String
    }
}
</script>
<style lang="scss" scoped>
    .tit-more {
        line-height: 100upx;
        color: #333;
        background: #fff;
        padding: 0 30upx;

        .tit {
            font-size: 32upx;
        }
    }
</style>
