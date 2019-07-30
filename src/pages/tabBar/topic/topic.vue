<template>
	<view class="content">
    <wuc-tab :tab-list="subjectList" :tabCur.sync="TabCur" tab-class="text-center bg-white wuc-tab fixed" select-class="text-blue" @change="tabChange"></wuc-tab>
		<swiper :current="TabCur" class="swiper" :style="pageBodyHeight" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
			<swiper-item v-for="item in subjectList" :key="item.id">
					<scroll-view
						:style="pageBodyHeight"
						scroll-y="true">
						<uni-list>
							<uni-list-item
								v-for="item in paperList"
								:key="item.exam_id"
								:title="item.name"
								:note="item.level"
								@tap="paperDetail(item)"></uni-list-item>
						</uni-list>
					</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import { obj2style } from '@/common/obj2style/obj2style';
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import UniList from '@/components/uni-list/uni-list.vue'
	import UniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				TabCur: 0,
				subjectList: [
					{
						name: '语文',
						id: 2
					},
					{
						name: '数学',
						id: 3
					},{
						name: '英语',
						id: 4
					},
					{
						name: '物理',
						id: 5
					},
					{
						name: '化学',
						id:6
					},
					{
						name: '生物',
						id: 10
					}
				]
			}
		},
		onLoad() {
      this.getPaperList({
				page: 1,
				per_page: 20,
				subject_id: this.subjectList[0].id
			})
		},
    components: { WucTab, UniList, UniListItem },
		computed: {
      ...mapGetters(['paperList']),
			pageBodyHeight() {
				let style = {};
				const systemInfo = uni.getSystemInfoSync();
				
				style['height'] = (systemInfo.screenHeight - 45 - 50) + 'px';
				return obj2style(style);
			}
		},
		methods: {
			...mapActions(['getPaperList']),
			tabChange(index) {
				this.TabCur = index;
				this.getPaperList({
					page: 1,
					per_page: 20,
					subject_id: this.subjectList[index].id
				})
			},
			swiperChange(e) {
				let { current } = e.target;
				this.TabCur = current;
				this.getPaperList({
					page: 1,
					per_page: 20,
					subject_id: this.subjectList[this.TabCur].id
				})
			},
			paperDetail(item) {
				uni.navigateTo({
					url: '/pages/paperDetail/paperDetail?id=' + item.exam_id
				});
			}
		}
	}
</script>

<style>
	div,
	scroll-view,
	swiper {
		box-sizing: border-box;
	}
	.swiper {
        /* #ifdef MP-WEIXIN || APP-PLUS */
        margin-top: 90upx;
        /* #endif */
	}
	.text-center {
    text-align: center;
	}
	.bg-white{
    background-color: #ffffff;
	}
</style>
