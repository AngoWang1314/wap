<template>
    <view class="count-down">{{hours}}-{{minutes}}-{{seconds}}</view>
</template>
<script>
    var one_second = 1000
    var one_minute = 60 * 1000
    var one_hour = 60 * 60 * 1000

    function leftpad(str, len, ch) {
        str = String(str)
        var i = -1
        if(!ch && ch !== 0) ch = ' '
        len = len - str.length
        while(++i < len) {
            str = ch + str
        }
        return str
    }

    export default {
        props: {
            remainTime: Number
        },
        data () {
            return {
                remain: this.remainTime
            }
        },
        computed: {
            hours () {
                var h = Math.floor(this.remain / one_hour)
                return leftpad(h, 2, 0)
            },
            minutes () {
                var m = Math.floor(this.remain % one_hour / one_minute)
                return leftpad(m, 2, 0)
            },
            seconds () {
                var s = Math.floor(this.remain % one_minute / one_second)
                return leftpad(s, 2, 0)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .count-down {
        display: inline-block;
        vertical-align: middle;
    }
</style>
