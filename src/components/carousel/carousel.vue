<template>
    <view
        class="m-carousel"
        :style="bgStyle">
        <uni-grid
            :options="list"
            :columnNum="5"
            :showOutBorder="false"
            :showBorder="false"></uni-grid>
    </view>
</template>
<script>
    import uniGrid from '@/components/uni-grid/uni-grid.vue'
    export default {
        props: {
            background: String,
            list: {
                type: Array,
                required: true
            }
        },
        components: {
            uniGrid
        },
        data () {
            return {
                bgStyle: {
                    'background-image': 'url(' + this.background + ')'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .m-carousel {
        margin-bottom: 20upx;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
