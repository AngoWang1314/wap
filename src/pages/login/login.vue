<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<image class="head_logo" :src="imgInfo.head" />
				</view>
			</view>
		</view>
		
		<!-- 登录form -->
		<view class="login_form">
			<view class="input">
				<view class="img">
					<image class="icon_user" :src="imgInfo.icon_user" />
				</view>
				<input type="text" v-model="username" placeholder="请输入账号" />
				<view class="img">
					<uni-view class="uni-icon uni-icon-clear ico" @tap="delUser"></uni-view>
				</view>
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<image class="icon_pwd" :src="imgInfo.icon_pwd" />
				</view>
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder="请输入密码" />
				<view class="img" @tap="switchPwd">
					<uni-view class="uni-icon uni-icon-eye ico" ></uni-view>
				</view>
			</view>
			<view class="line" />
		</view>
		
		<!-- 登录按钮 -->
		<button class="submit" type="primary" @tap="login">登录</button>
		
		<!-- 注册/忘记密码 -->
		<view class="opts">
			<text @tap="goReg" class="text">立即注册</text>
			<text @tap="findPwd" class="text">忘记密码</text>
		</view>
		
		<!-- 快速登录 -->
		<view class="quick_login_line">
			<view class="line" />
			<text class="text">快速登录</text>
			<view class="line" />
		</view>
		<view class="quick_login_list">
			<image @tap="thirdLogin('qq')" class="item" :src="imgInfo.qq" />
			<image @tap="thirdLogin('wechat')" class="item" :src="imgInfo.wechat" />
			<image @tap="thirdLogin('weibo')" class="item" :src="imgInfo.weibo" />
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				username: '',
				userpwd: '',
				pwdType: 'password',
				imgInfo: {
					head: isUni ? '/static/head.png' : require('./images/head.png'),
					icon_user: isUni ? '/static/icon_user.png' : require('./images/icon_user.png'),
					icon_pwd: isUni ? '/static/icon_pwd.png' : require('./images/icon_pwd.png'),
					qq: isUni ? '/static/qq.png' : require('./images/qq.png'),
					wechat: isUni ? '/static/wechat.png' : require('./images/wechat.png'),
					weibo: isUni ? '/static/weibo.png' : require('./images/weibo.png')
				},
				from: ''
			}
		},
		onLoad(options) {
			// #ifdef H5 || MP-WEIXIN
			if(options && options.from){
				this.from = options.from + '?';
				for (var k in options) {
					if (k !== 'from') {
						this.from += (k + '=' + options[k] + '&');
					}
				}
				this.from = this.from.substring(0, this.from.length - 1);
			}
			// #endif
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				var vm = this;
				try {
					uni.setStorageSync('token', 'token')
					
					// #ifdef H5 || MP-WEIXIN
					setTimeout(function(){
						uni.switchTab({
							url: vm.from || '/pages/tabBar/nowPlaying/nowPlaying'
						})
					}, 100)
					// #endif
					
					// #ifdef APP-PLUS
					setTimeout(function(){
						uni.switchTab({
							url: '/pages/tabBar/nowPlaying/nowPlaying'
						})
					}, 100)
					// #endif
				} catch (e) {
					console.log(e)
				}
			},
			goReg() {
				uni.navigateTo({
					url: '/pages/reg/reg'
				})
			},
			findPwd() {
				uni.navigateTo({
					url: '/pages/find-pwd/find-pwd'
				})
			},
			thirdLogin(type) {
				console.log(type)
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 40upx;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;

	.page_login {
		padding: 30upx;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_bg {
			border: 0 solid #2196f3;
			border-radius: 100upx;
			width: 200upx;
			height: 200upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.head_inner_bg {
				border-radius: 100upx;
				width: 200upx;
				height: 200upx;
				display: flex;
				background-color: #2196f3;
				align-items: flex-end;
				justify-content: center;
				overflow: hidden;
				
				.head_logo {
					width: 110upx;
					height: 130upx;
				}
			}
		}
	}

	.login_form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid $form-border-color;
		border-radius: 0;
		border: 0;

		.line {
			width: 100%;
			height: 1px;
			margin-bottom: 36upx;
			background-color: $form-border-color;
		}

		.input {
			width: 100%;
			max-height: 80upx;
			display: flex;
			padding: 6upx;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			
			.icon_user, .icon_pwd {
				width: 64upx;
				height: 64upx;
			}

			.img {
				margin: 10upx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.ico {
					font-size: 48upx;
					color: rgb(143, 143, 148);
				}
			}

			.img_del {
				width: 42upx;
				height: 42upx;
			}

			.img_pwd_switch {
				width: 56upx;
				height: 24upx;
			}

			input {
				outline: none;
				height: 60upx;
				width: 100%;

				&:focus {
					outline: none;
				}
			}
		}
	}

	.submit {
		color: white;
		background-color: rgba(33, 150, 243, 1.0);
		-webkit-tap-highlight-color: rgba(33, 150, 243, 1.0);
		border-radius: 0;
		border: 0;

		&:active {
			color: #B6B6B6;
			background-color: rgba(33, 150, 243, 0.8);
		}
		
		&:after {
			border: 0;
		}
	}

	.opts {
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.text {
			font-size: 26upx;
			color: $text-color;
		}
	}

	.quick_login_line {
		margin-top: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.line {
			height: 1px;
			width: 16%;
			background-color: rgba(211, 211, 213, 1);
		}

		.text {
			font-size: 26upx;
			color: rgba(200, 200, 200, 1);
			margin: 4upx 12upx;
		}
	}

	.quick_login_list {
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		.item {
			width: 100upx;
			height: 100upx;
		}
	}
</style>

