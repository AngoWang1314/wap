<template>
    <view class="header-container">
        <view class="nav-bar">
            <navigator url="/"  class="logo"></navigator>
            <navigator url="/pages/search/search" class="top-search-ipt" >
                <i class="icon" ></i>
                <span class="placeholder" >
                    <span>商品搜索, 共</span><span>5116</span><span>款好物</span>
                </span>
            </navigator>
        </view>
        <tabs
            @tab-change="tabChange"
            :tab-list="tabs">
        </tabs>
    </view>
</template>
<script>
	import tabs from '@/components/tabs/tabs.vue'

    export default {
		components: {
			tabs
        },
        props: {
            tabs: Array
        },
        data() {
			return {}
        },
        methods: {
            tabChange (id) {
                this.$emit('tab-change', id);
            }
        }
    }
</script>
<style lang="scss">
    .header-container{
        background-color: #fff;
    }

    .nav-bar {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 16upx 30upx;
        width: 100%;
    }

    .logo {
        display: inline-block;
        margin-right: 20upx;
        width: 138upx;
        height: 40upx;
        background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        background-size: cover;
        background-position: center;
    }

    .top-search-ipt {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 78%;
        height: 56upx;
        font-size: 28upx;
        background-color: #ededed;
        border-radius: 8upx;
        text-decoration: none;

        .icon {
            display: inline-block;
            width: 28upx;
            height: 28upx;
            vertical-align: middle;
            background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-right: 10upx;
        }

        .placeholder {
            color: #666;
            text-decoration: none;
        }
    }
</style>