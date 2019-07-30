<template>
    <view class="index-service-policy">
        <view
            class="policy-item"
            v-for="(item, index) in list"
            :key="index">
            <image
                class="policy-item-icon"
                :src="item.icon"
                :lazy-load="true"></image>
            <text class="policy-item-txt">{{item.desc}}</text>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .index-service-policy {
        background: #fff;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 72upx;
        padding: 0 30upx;
    }

    .policy-item {
        flex: 1;

        .policy-item-txt {
            font-size: 24upx;
            color: #333;
            margin-left: 8upx;
            vertical-align: middle;
        }

        .policy-item-icon {
            display: inline-block;
            width: 32upx;
            height: 32upx;
            vertical-align: middle;
        }
    }
</style>
