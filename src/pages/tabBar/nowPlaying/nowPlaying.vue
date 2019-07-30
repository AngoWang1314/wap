<template>
	<view class="content">
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" shadow="false" @click-left="showCity">
			<block slot="left">
				<view class="city">
					<view>{{ currentCity }}</view>
					<uni-icon type="arrowdown" color="#333333" size="22" />
				</view>
			</block>
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666" />
				<input confirm-type="search" class="input" type="text" placeholder="电影电视剧影人" @confirm="confirm" />
			</view>
		</uni-nav-bar>
		<tabs
			v-model="activeTabName"
			:tab-list="tabs">
		</tabs>
		<!-- <swiper class="mt88">
			<swiper-item>1</swiper-item>
			<swiper-item>2</swiper-item>
		</swiper> -->
	</view>
</template>

<script>
	import tabs from '@/components/tabs/tabs.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import {mapState} from 'vuex'

	export default {
		components: {
			tabs,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				activeTabName: 'now_playing',
				tabs: [
					{
						id: 'now_playing',
						name: '正在热映'
					},
					{
						id: 'will_play',
						name: '即将上映'
					}
				]
			}
		},
		computed: {
			...mapState(['currentCity'])
		},
		methods: {
			showCity() {
				uni.navigateTo({
					url: '/pages/selectCity/selectCity'
				});
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				});
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding-top: 1px;
	}

	view {
		font-size: $uni-font-size-base;
		line-height: inherit
	}

	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left: 16upx;
		white-space: nowrap;
	}

	.input-view {
		width: 92%;
		display: flex;
		background-color: #e7e7e7;
		height: 60upx;
		border-radius: 10upx;
		padding: 0 4%;
		flex-wrap: nowrap;
		margin: 14upx 0;
		line-height: 60upx;
	}

	.input-view .uni-icon {
		line-height: 60upx !important;
	}

	.input-view .input {
		height: 60upx;
		line-height: 60upx;
		width: 94%;
		padding: 0 3%;
	}	

	.tabs-wrapper {
		position: fixed;
		top: 88upx;
		left: 0;
		right: 0;
		z-index: 998;
	}

	.mt88 {
		margin-top: 176upx;
	}
</style>