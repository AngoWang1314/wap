<template>
    <view class="tabs-wrapper">
        <view class="tabs-container">
            <view class="tabs">
                <view
                    class="tab"
                    ref="tabItems"
                    v-for="item in tabList"
                    :key="item.id"
                    :class="{ 'is-active': item.isActive }">
                    <view 
                        class="tab-label"
                        @tap="activeThis(item.id)">
                        {{ item.name }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
  export default {
    name: 'tabs',
    props: {
        tabList: {
            type: Array,
            required: true
        },
    },

    data() {
        return {
            scrollLeft: 0,
        }
    },

    methods: {
        activeThis(id) {
            this.$store.dispatch('changeHeadertabActive', id)
            this.$emit('tab-change', id);
        }
    }
  }
</script>
<style lang="scss" scoped>
    .tabs-wrapper {
        position: relative;

        ::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background-color: transparent;
        }

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2upx;
            background-color: $uni-border-color;
        }
    }

    .tabs {
		display: flex;
        flex-flow: row nowrap;
        padding: 0 30upx;
        overflow: auto hidden;
	}

    .tab {
        margin-left: 48upx;
        flex-shrink: 0;
        line-height: 88upx;
        text-align: center;
        color: $uni-text-color-grey;
        cursor: pointer;
        color: $uni-text-color;

        &:first-of-type {
            margin-left: 0;
        }

        .tab-label {
            position: relative;
            padding: 0 16upx;
            line-height: 60upx;
            font-size: 28upx;
            text-align: center;
        }

        &.is-active {
            color: $uni-text-color-active;

            .tab-label:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                z-index: 1;
                width: 100%;
                height: 4upx;
                background-color: $uni-text-color-active;
            }
        }
    }
</style>