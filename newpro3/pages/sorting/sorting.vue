<template>
	<view>
	<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
			<view class="cu-item flex-sub" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
			 :data-id="index">
				{{item.name}}
			</view>
			</view>
		</scroll-view>
	
	
		<view class="VerticalBox">
			
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:100vh"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" id="main-0">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 111</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list1" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.intro}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.loc}}</view>
							</view>
	
						</view>
						
					</view>
				</view>
				
				<view class="padding-top padding-lr" id="main-1">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 222</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list1" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.intro}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.loc}}</view>
							</view>
					
						</view>
						
					</view>
				</view>
				<view class="padding-top padding-lr" id="main-2">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 333</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list1" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.intro}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.loc}}</view>
							</view>
					
						</view>
						
					</view>
				</view>
				<view class="padding-top padding-lr" id="main-3">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 444</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list1" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.intro}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.loc}}</view>
							</view>
					
						</view>
						
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				list: [{
					id:0,
					name:"藏品榜",
				},
				{
					id:1,
					name:"展览榜",
				},
				{
					id:2,
					name:"新闻榜",
				},
				{
					id:3,
					name:"距离榜",
				}],
				list1: [{
					id:0,
					name:"北京故宫博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				},
				{
					id:1,
					name:"湖南省博物院",
					intro:"位于湖南省长沙市天心区韶山路10号",
					city:"长沙",
					loc:"天心",
				},
				{
					id:2,
					name:"军事博物馆",
					intro:"位于北京朝阳区长安街10号",
					city:"北京",
					loc:"朝阳",
				},
				{
					id:3,
					name:"国家博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				}],
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			godetail(){
				console.log("godetails");
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
			
		}
	}
</script>

<style>
.ordernum {
	font-size: 100px;
}
</style>
