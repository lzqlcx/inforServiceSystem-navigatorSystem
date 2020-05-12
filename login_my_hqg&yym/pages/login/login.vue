<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#DDD5AF"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 --><!--可调整 -->
		<image class="loginhead_hgq" src="../../static/login/loginhead_hgq.jpg" mode="widthFix" lazy-load></image>
		<!-- 输入框+按钮 -->
		<view class="login_body_hgq">
			
			<!-- 账号密码登录 -->
			<template v-if="!status">
				<input type="text" v-model="username"
				class="uni-input common_input_hgq"
				placeholder="昵称/手机号" />
				
				<view class="login_input_box_hgq">
					<input type="text" v-model="password"
					class="uni-input common_input_hgq forget-input"
					placeholder="请输入密码" />
					<view class="forget u-f-ajc login_font_color_hgq">忘记密码</view>
				</view>
			</template>
			
			
			<!-- 手机验证码登录 -->
			<template v-else>
				<view class="login_input_box_hgq">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" v-model="phone"
					class="uni-input common_input_hgq phone-input"
					placeholder="手机号" />
				</view>
				<view class="login_input_box_hgq">
					<input type="text" v-model="checknum"
					class="uni-input common_input_hgq forget-input"
					placeholder="请输入验证码" />
					<view class="forget u-f-ajc login_font_color_hgq phone_input_hqg"
					@tap="getCheckNum">
						<view class="u-f-ajc">{{!codetime?'获取验证码':codetime+' s'}}</view>
					</view>
				</view>
			</template>
			
			
			<button class="login_user_set_btn_hgq" 
			:loading="loading" :class="{'login_user_set_btn_disable_hgq':disabled}" 
			type="primary" @tap="submit" :disabled="disabled">登录</button>
		</view>
		
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login_padding_hgq login_font_color_hgq" 
		@tap="changeStatus">
			{{status?'账号密码登录':'验证码登录'}}<view class="icon iconfont icon-jinru login_font_color_hgq"></view>
		</view>
		
		<!-- 第三方登陆 -->
		<view class="other-login-title u-f-ajc login_padding_hgq login_font_color_hgq">第三方登录</view>
		<other-login :noback="false"></other-login>
		
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login_padding_hgq login_font_color_hgq">
			注册即代表您同意
			<view>《XXX协议》</view>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	import otherLogin from "../../components/home/other-login.vue";
	export default {
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				status:false,//false代表账号密码登录，true代表手机验证码登录
				disabled:true,
				loading:false,
				username:"",
				password:"",
				phone:"",
				checknum:"",
				codetime:0,
			}
		},
		watch:{
			username(val){
				this.OnBtnChange();
			},
			password(val){
				this.OnBtnChange();
			},
			phone(val){
				this.OnBtnChange();
			},
			checknum(val){
				this.OnBtnChange();
			}
		},
		methods: {
			// 验证手机号码
			isPhone(){
				let mPattern = /^1[34578]\d{9}$/; 
				return mPattern.test(this.phone);
			},
			// 获取验证码
			async getCheckNum(){
				if(this.codetime > 0)return;
				// 验证手机号合法性
				if(!this.isPhone()){
					return uni.showToast({ title: '请输入正确的手机号码', icon:"none" });
				}
				// 请求服务器，发送验证码
				let [err,res] = await this.$http.post('/user/sendcode',{
					phone:this.phone
				});
				// 请求失败处理
				this.$http.errorCheck(err,res);
				if (res.data.errorCode === 30001) return;
				// 发送成功，开启倒计时
				this.codetime=60;
				let timer=setInterval(()=>{
					this.codetime--;
					if(this.codetime < 1){
						clearInterval(timer);
						this.codetime=0;
					}
				},1000);
			},
			// 初始化表单
			initInput(){
				this.username='';
				this.password='';
				this.phone='';
				this.checknum='';
			},
			// 改变按钮状态
			OnBtnChange(){
				if( (this.username && this.password)||(this.phone && this.checknum) ){
					this.disabled=false; return;
				}
				this.disabled=true;
			},
			// 切换登录状态
			changeStatus(){
				this.initInput();
				this.status = !this.status;
			},
			// 返回上一步
			back(){
				uni.navigateBack({ delta: 1 });
			},
			// 提交登录
			submit(){
				// 账号密码登录
				if(!this.status){
					return this.User.login({
						url:"/user/login",
						data:{
							username:this.username,
							password:this.password
						}
					})
				}
				// 验证码登录
				// 验证手机号合法性
				if(!this.isPhone()){
					return uni.showToast({ title: '请输入正确的手机号码', icon:"none" });
				}
				return this.User.login({
					url:"/user/phonelogin",
					data:{
						phone:this.phone,
						code:this.checknum
					}
				});
			}
		}
	}
</script>

<style>
.login_tip_position_hgq{
	text-align: center;
}
.login_font_color_hgq{ color: #000000; }
.login_padding_hgq{ padding: 20upx 0; }
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-guanbi{
	position: fixed;
	top: 90upx;
	left: 10upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;
	z-index: 100;
}
.loginhead_hgq{ width: 100%; }
.login_body_hgq{
	padding: 0 20upx!important;
}
.common_input_hgq{
	font-size: 30upx;
	border-bottom: 1upx solid #F4F4F4;
}

.u-f-ajc{
	text-align: center;
}
.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	content: "";
	position: absolute;
	background: #BBBBBB;
	height: 1upx;
	width: 100upx;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}
.login_input_box_hgq{
	position: relative;
	
}
.login_input_box_hgq .forget-input{
	padding-right: 150upx;
}
.login_input_box_hgq .forget,.login_input_box_hgq .phone{
	position: absolute;
	top: 0;
	height: 100%;
	z-index: 100;
}
.login_input_box_hgq .forget{
	width: 150upx;
	right: 0;
}
.login_input_box_hgq .phone{
	width:100upx;
	left: 0;
	font-weight: bold;
}
.login_input_box_hgq .phone-input{
	padding-left: 100upx;
}
.login_user_set_btn_hgq{
	width: 90%;
	margin-right: 7%;
	margin-top: 5%;
	background: #429fff!important;
	border: 0!important;
	color: #ffffff!important;
}
.login_user_set_btn_disable_hgq{
	background: #F4F4F4!important;
	border: 1upx solid #EEEEEE!important;
	color: #909090!important;
}

.phone_input_hgq view{
	background: #EEEEEE;
	border-radius: 10upx;
	font-size: 25upx;
	width: 150upx;
	padding: 10upx 0;
}
.uni-input {
	height: 50upx;
	padding: 15upx 25upx;
	line-height:50upx;
	font-size:28upx;
	background:#FFF;
	flex: 1;
}
</style>
