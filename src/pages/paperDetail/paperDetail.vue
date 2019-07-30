<template>
  <view>
    <view class="paper-top--fixed">
      <view class="paper-name">{{paperDetail.paper_name}}</view>
    </view>
    <view class="questions">
      <view
        class="questions-item"
        v-for="item in paperDetail.items"
        :key="item.question_info.question.id">
        <rich-text :nodes="item.question_info.question"></rich-text>
        <view class="answer">
          <text>查看答案与解析</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
      }
    },
    onLoad(options) {
      this.getPaperDetail({
        id: options.id
      })
    },
    computed: {
      ...mapGetters(['paperDetail'])
    },
		methods: {
      ...mapActions(['getPaperDetail'])
    }
  }
</script>
<style>
  .paper-top--fixed {
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    height: 92upx;
    line-height: 92upx;
    text-align: center;
    background: #fff;
  }
  .paper-name {
    max-width: 60%;
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .questions {
    padding-top: 92upx;
    padding-left: 30upx;
    padding-right: 30upx;
    background: #fff;
    overflow: hidden;
  }
  .questions-item {
    margin-top: 30upx;
    margin-bottom: 30upx;
    box-shadow: 0 2px 8px #f9f9f9;
  }
  .answer {
    padding-bottom: 20upx;
    text-align: right; 
    color: #0480fb;
    font-size: 14px;
  }
</style>

