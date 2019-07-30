import Vue from 'vue'
import App from './App'
import store from './store'
import request from '@/common/request/request'

Vue.config.productionTip = false
//document.cookie = 'check=%08%09S%5ESZS%0D%0EX%08%08SX%5C%0ASS%5EZ%0A%0F%5ES%0FY%5B%08Y%0EY_'

request.setConfig({
  header: {
    'Cookie': 'check=%08%09S%5ESZS%0D%0EX%08%08SX%5C%0ASS%5EZ%0A%0F%5ES%0FY%5B%08Y%0EY_',
    'Authorization': uni.getStorageSync('token'),
    'content-type': 'application/json'
  }
})

// 设置请求拦截器
request.interceptors.request(config => {
  /**
   * 追加请求头
   * config.header.token = 'token from local'
   * 覆盖请求头
   * config.header = {token: 'token from local'}
   * 终止请求
   * return false
   * 向外层抛出错误，用 catch 捕获
   * return Promise.reject('error from request interceptors');
   */
  uni.showLoading({
    title: '加载中'
  });

  // 无论有无修改配置都返回 config
  return config;
})

// 设置响应拦截器
request.interceptors.response(res => {
  // 接收请求，执行响应操作
  // 您的逻辑......

  // return false;    // 阻止返回,页面不会接收返回值
  // return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
  uni.hideLoading();

  if(res.statusCode >= 500) {
    return Promise.reject('服务器错误：' + res.statusCode) // 向外层抛出错误，用catch捕获
  } else if(res.statusCode >= 400) {
    return Promise.reject('客户端错误：' + res.statusCode) // 向外层抛出错误，用catch捕获
  }
  return res; // 原样返回
})

Vue.prototype.$store = store;
Vue.prototype.$request = request;

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
