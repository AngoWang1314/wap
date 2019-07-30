<template>
    <view>
        <v-header
            @tab-change="tabChange"
            :tabs="cateList"></v-header>
        <swiper
            :indicator-dots="true"
            :indicator-color="'rgba(255, 255, 255, .4)'"
            :indicator-active-color="'#ffffff'"
            :autoplay="true"
            :interval="3500"
            class="swiper">
            <swiper-item
                v-for="item in recommend.focusList"
                :key="item.id">
                <image
                    class="swiper-image"
                    :src="item.picUrl"></image>
            </swiper-item>
        </swiper>
        <view
            class="recommend"
            v-if="tab === 0 && recommend.policyDescList">
            <v-deal-promise
                :list="recommend.policyDescList"></v-deal-promise>
            <v-carousel
                :background="recommend.kingKongModule.background"
                :list="recommend.kingKongModule.kingKongList"></v-carousel>
            <v-category-hot-sell
                :title="recommend.categoryHotSellModule.title"
                :list="recommend.categoryHotSellModule.categoryList"
                :column-num="{
                    first: 2,
                    others: 4
                }"></v-category-hot-sell>
            <v-flash-sale
                :config="recommend.flashSaleModule"></v-flash-sale>
        </view>
        <view
            class="home"
            v-if="tab !== 0">
            home
        </view>
    </view>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
    import vHeader from '@/components/header/header.vue'
    import vDealPromise from '@/components/DealPromise/DealPromise.vue'
    import vCarousel from '@/components/carousel/carousel'
    import vCategoryHotSell from '@/components/category-hot-sell/category-hot-sell.vue'
    import vFlashSale from '@/components/flash-sale/flash-sale.vue'

    export default {
		components: {
            vHeader,
            vDealPromise,
            vCarousel,
            vCategoryHotSell,
            vFlashSale
		},
        data() {
            return {
                tab: 0,
                newItemsOption: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        },
		computed: {
            ...mapGetters(['cateList', 'subCateList', 'recommend'])
        },
        methods: {
            tabChange (id) {
                this.tab = id
                id !== 0 && this.$store.dispatch('setSubCateList', id)
            }
        },
        created () {
            this.$store.dispatch('getCateList')
            this.$store.dispatch('getRecommend')
        }
    }
</script>
<style lang="scss" scoped>
    .swiper {
        height: 370upx;

        .swiper-image {
            width: 100%;
        }
    }
</style>

