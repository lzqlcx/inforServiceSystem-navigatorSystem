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
			
			<!-- 邮箱、密码登录 -->
			<template v-if="!status">
				<input type="text" v-model="useremail"
				class="uni-input common_input_hgq"
				placeholder="请输入邮箱" />
				
				<view class="login_input_box_hgq">
					<input type="text" v-model="password"
					class="uni-input common_input_hgq forget-input"
					placeholder="请输入密码" />
				</view>
			
				
				<button class="login_user_set_btn_hgq"
				:loading="loading" :class="{'login_user_set_btn_disable_hgq':disabled}" 
				type="primary" :disabled="disabled">登录</button>
			</template>
			
			
			<!-- 注册 -->
			<template v-else>
				<view class="login_input_box_hgq">
					<input type="text" v-model="phone"
					class="uni-input common_input_hgq"
					placeholder="邮箱" />
				</view>
				<view class="login_input_box_hgq">
					<input type="text" v-model="checknum"
					class="uni-input common_input_hgq forget-input"
					placeholder="请设置密码" />
		
				</view>
			
			<button class="login_user_set_btn_hgq" 
			:loading="loading" :class="{'login_user_set_btn_disable_hgq':disabled}" 
			type="primary" :disabled="disabled">注册</button>
		</template>
		</view>
		
		<!-- 登录/注册状态切换 -->
		<view class="login-status u-f-ajc login_padding_hgq login_font_color_hgq" 
		@tap="changeStatus">
			{{status?'账号密码登录':'没有账号？马上注册'}}<view class="icon iconfont icon-jinru login_font_color_hgq"></view>
		</view>
		
		
		
	</view>
</template>

<script>
	// 做表单验证需引用的插件
	// 来自 graceUI 的表单验证,兼容uni-app及微信小程序的优秀前端框架，大幅度提高布局效率
	var  graceChecker = require("../../common/graceChecker.js");
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	import otherLogin from "../../components/home/other-login.vue";
	export default {
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				status:false,//false代表邮箱、密码登录页面，true代表注册页面
				disabled:true,
				loading:false,
				useremail:"",
				password:"",
				phone:"",
				checknum:"",
				codetime:0,
			}
		},
		watch:{
			useremail(val){
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
		      formSubmit: function (e) {
		                //将下列代码加入到对应的检查位置
		                //定义表单规则
		                var rule = [
		                    {name:"email_name", checkType : "email", checkRule:"",  errorMsg:"请填写您的邮箱"},
		                ];
		                //进行表单检查
		                var formData = e.detail.value;
		                var checkRes = graceChecker.check(formData, rule);
		                if(checkRes){
		                    uni.showToast({title:"验证通过!", icon:"none"});
		                }else{
		                    uni.showToast({ title: graceChecker.error, icon: "none" });
		                }
		            },
		            formReset: function (e) {
		                console.log("清空数据")
		                this.chosen = ''
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
				if( (this.useremail && this.password)||(this.phone && this.checknum) ){
					this.disabled=false; return;
				}
				this.disabled=true;
			},
			// 切换登录状态--->注册
			changeStatus(){
				this.initInput();
				this.status = !this.status;
			},
			// 返回上一步
			back(){
				uni.navigateBack({ delta: 1 });
			},

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
	top: 110rpx;
	left: 10upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;
	z-index: 100;
}
.loginhead_hgq{ width: 100%; border-radius: 10upx;}
.login_body_hgq{
	padding: 0 20upx!important;
	margin-top: 50rpx;
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
	border-radius: 10upx;
	line-height:50upx;
	font-size:28upx;
	background:#FFF;
	flex: 1;
}
</style>
