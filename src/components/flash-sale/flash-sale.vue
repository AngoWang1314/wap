<template>
    <view class="flash-sale">
        <v-tit-more>
            限时购
            <v-count-down
                :remain-time="config.remainTime"></v-count-down>
        </v-tit-more>
    </view>
</template>
<script>
    import vTitMore from '@/components/tit-more/tit-more.vue'
    import vCountDown from '@/components/count-down/count-down.vue'

    export default {
        components: {
            vTitMore,
            vCountDown
        },
        props: {
            config: Object
        }
    }
</script>
<style lang="scss" scoped>
    .flash-sale {
        background: #fff;
    }
</style>
