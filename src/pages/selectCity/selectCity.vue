<template>
	<view class="content">
	    <ss-select-city :hotCitys="hotCitys" v-model="currentCity" @on-select="onSelect"></ss-select-city>
	</view>
</template>

<script>
	import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue'

	export default {
		components: {
			ssSelectCity
		},
		data() {
			return {
				hotCitys: ['广州', '深圳', '杭州', '天津', '北京', '上海', '成都', '重庆', '厦门']
			}
		},
		computed: {
			currentCity: {
				get() {
					return this.$store.state.currentCity
				},
				set(value) {
					this.$store.commit('setCity', value)
				}
			}
		},
		methods: {
			onSelect(city) {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.content {
		padding-top: 30upx;
	}
</style>
