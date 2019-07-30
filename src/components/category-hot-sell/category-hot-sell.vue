<template>
    <view class="hot-sell">
        <v-tit-more>{{ title }}</v-tit-more>
        <view class="content">
            <view class="line"
                v-for="(items, i) in groups"
                :key="i">
                <view
                    v-for="(item, index) in items"
                    :key="index"
                    :class="item.className">
                    <text class="item-txt">{{item.categoryName}}</text>
                    <image
                        class="item-pic"
                        :src="item.showPicUrl"
                        :lazy-load="true"></image>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    import vTitMore from '@/components/tit-more/tit-more.vue'

    export default {
        props: {
            title: String,
            list: Array,
            columnNum: Object
        },
        components: {
            vTitMore
        },
        computed: {
            groups () {
                var firstLineColNum = this.columnNum.first
                var otherColumnNum = this.columnNum.others
                var rows = []
                var firstLine = []
                var items = []
                var len = this.list.length
                this.list.forEach((item, index) => {
                    if(index < firstLineColNum) {
                        item.className = 'item-big item-' + (index + 1)
                        firstLine.push(item)
                    } else {
                        item.className = 'item'
                        items.push(item)
                        if((index - firstLineColNum) % otherColumnNum === otherColumnNum - 1) {
                            rows.push(items)
                            items = []
                        }
                    }
                })
                rows.unshift(firstLine)
                return rows
            }
        }
    }
</script>
<style lang="scss" scoped>
    .hot-sell {
        margin-bottom: 20upx;
        color: #333;
        background: #fff;
    }

    .content {
        padding: 0 20upx 20upx 30upx;
    }

    .line {
        display: flex;
        justify-content: space-between;
    }

    .item-big {
        height: 200upx;
        margin-right: 10upx;
        margin-bottom: 10upx;
        flex-grow: 1;
        display: flex;
        flex-flow: row nowrap;
        border-radius: 4upx;

        .item-txt {
            margin-top: 66upx;
            padding-left: 24upx;
            font-size: 28upx;
            color: #333;
        }

        .item-pic {
            width: 200upx;
            height: 200upx;
        }
    }

    .item-1 {
        background: #f9f3e4;
    }

    .item-2 {
        background: #ebeff6;
    }

    .item {
        height: 180upx;
        margin-right: 10upx;
        margin-bottom: 10upx;
        font-size: 24upx;
        text-align: center;
        background: #f5f5f5;
        border-radius: 4upx;

        .item-txt {
            margin-top: 10upx;
            font-size: 24upx;
            color: #333;
        }

        .item-pic {
            width: 120upx;
            height: 120upx;
        }
    }
</style>
