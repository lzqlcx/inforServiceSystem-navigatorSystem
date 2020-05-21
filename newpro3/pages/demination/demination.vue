<template>
	
	<view>
	
	<view class="tit_hotcity">国内热门城市</view>
		<view>
			<scroll-view class="scroll-view_H"  scroll-x="true" @scroll="scroll" scroll-left="120" >
			<view class="hot_city_item" v-for="(value, key) in hotcity_listdata" :key="key" @click="goDetail(value)">
			<image :src="value.img"></image>
			<text>{{value.city_name}}</text>
			</view>
			</scroll-view>
		
		
		</view>
		
		
	<view class="city">
		
		
		
		<view class="tit">所有城市</view>
		
		<view class="citys_list">
			<view v-for="(value, key) in listdata" :key="key" @click="goDetail(value)">
			<view class="city_item">
			<image :src="value.img"></image>
			<text>{{value.city_name}}</text>
		</view>
		</view>
		</view>
		
		
		</view>
		
			<button @click="callus">没找到想去的国家？请联系我们</button>
		
		</view>
		
		
</template>

<script>
	export default {
		data() {
			return {
				hotcity_listdata:[
					{
						img:"../../static/icon/北京.jpg",
						city_name:"北京"
					},
					{
						img:"../../static//icon/上海.jpg",
						city_name:"上海"
					},
					{
						img:"../../static//icon/广州.jpg",
					city_name:"广州"
					},
					{
						img:"../../static/icon/南京.jpg",
					city_name:"南京"
					}
				],
				listdata:[
					{
						img:"../../static/icon/北京.jpg",
						city_name:"北京"
					},
					{
						img:"../../static//icon/上海.jpg",
						city_name:"上海"
					},
					{
						img:"../../static//icon/广州.jpg",
					city_name:"广州"
					},
					{
						img:"../../static/icon/南京.jpg",
					city_name:"南京"
					},
					{
						img:"../../static/icon/天津.jpg",
					city_name:"天津"
					},
					{
						img:"../../static/icon/石家庄.jpg",
					city_name:"石家庄"
					},
					{
						img:"../../static/icon/邯郸.jpg",
					city_name:"邯郸"
					},
					{
						img:"../../static/icon/太原.jpg",
					city_name:"太原"
					},
					{
						img:"../../static/icon/长治.jpg",
					city_name:"长治"
					},
					{
						img:"../../static/icon/呼和浩特.jpg",
					city_name:"呼和浩特"
					},
					{
						img:"../../static/icon/鄂尔多斯.jpg",
					city_name:"鄂尔多斯"
					},
					{
						img:"../../static/icon/沈阳.jpg",
					city_name:"沈阳"
					},
					{
						img:"../../static/icon/大连.jpg",
					city_name:"大连"
					},
					{
						img:"../../static/icon/长春.jpg",
					city_name:"长春"
					},
					{
						img:"../../static/icon/哈尔滨.jpg",
					city_name:"哈尔滨"
					},
					{
						img:"../../static/icon/大庆.jpg",
					city_name:"大庆"
					},
					{
						img:"../../static/icon/黑河.jpg",
					city_name:"黑河"
					},
					{
						img:"../../static/icon/南通.jpg",
					city_name:"南通"
					},
					{
						img:"../../static/icon/苏州.jpg",
					city_name:"苏州"
					},
					{
						img:"../../static/icon/扬州.jpg",
					city_name:"扬州"
					},
					{
						img:"../../static/icon/常州.jpg",
					city_name:"常州"
					},
					{
						img:"../../static/icon/杭州.jpg",
					city_name:"杭州"
					},
					{
						img:"../../static/icon/温州.jpg",
					city_name:"温州"
					},
					{
						img:"../../static/icon/宁波.jpg",
					city_name:"宁波"
					},
					{
						img:"../../static/icon/合肥.jpg",
					city_name:"合肥"
					},
					{
						img:"../../static/icon/黄山.jpg",
					city_name:"黄山"
					},
					{
						img:"../../static/icon/福州.jpg",
					city_name:"福州"
					},
					{
						img:"../../static/icon/龙岩.jpg",
					city_name:"龙岩"
					},
					{
						img:"../../static/icon/泉州.jpg",
					city_name:"泉州"
					},
					{
						img:"../../static/icon/井冈山.jpg",
					city_name:"井冈山"
					},
					{
						img:"../../static/icon/南昌.jpg",
					city_name:"南昌"
					},
					{
						img:"../../static/icon/瑞金.jpg",
					city_name:"瑞金"
					},
					{
						img:"../../static/icon/萍乡.jpg",
					city_name:"萍乡"
					},
					{
						img:"../../static/icon/青岛.jpg",
					city_name:"青岛"
					},
					{
						img:"../../static/icon/威海.jpg",
					city_name:"威海"
					},
					{
						img:"../../static/icon/青州.jpg",
					city_name:"青州"
					},
					{
						img:"../../static/icon/济南.jpg",
					city_name:"济南"
					},
					{
						img:"../../static/icon/烟台.jpg",
					city_name:"烟台"
					},
					{
						img:"../../static/icon/潍坊.jpg",
					city_name:"潍坊"
					},
					{
						img:"../../static/icon/郑州.jpg",
					city_name:"郑州"
					},
					{
						img:"../../static/icon/洛阳.jpg",
					city_name:"洛阳"
					},
					{
						img:"../../static/icon/南阳.jpg",
					city_name:"南阳"
					},
					{
						img:"../../static/icon/开封.jpg",
					city_name:"开封"
					},
					{
						img:"../../static/icon/信阳.jpg",
					city_name:"信阳"
					},
					{
						img:"../../static/icon/青岛.jpg",
					city_name:"青岛"
					},
					{
						img:"../../static/icon/武汉.jpg",
					city_name:"武汉"
					},
					{
						img:"../../static/icon/荆州.jpg",
					city_name:"荆州"
					},
					{
						img:"../../static/icon/长沙.jpg",
					city_name:"长沙"
					},
					{
						img:"../../static/icon/湘潭.jpg",
					city_name:"湘潭"
					},
				{
						img:"../../static/icon/中山.jpg",
					city_name:"中山"
					},
					{
						img:"../../static/icon/深圳.jpg",
					city_name:"深圳"
					},
					{
						img:"../../static/icon/南宁.jpg",
					city_name:"南宁"
					},
					{
						img:"../../static/icon/海口.jpg",
					city_name:"海口"
					},
					{
						img:"../../static/icon/自贡.jpg",
					city_name:"自贡"
					},
					{
						img:"../../static/icon/广汉.jpg",
					city_name:"广汉"
					},
					{
						img:"../../static/icon/成都.jpg",
					city_name:"成都"
					},
					{
						img:"../../static/icon/广安.jpg",
					city_name:"广安"
					},
					{
						img:"../../static/icon/遵义.jpg",
					city_name:"遵义"
					},
					{
						img:"../../static/icon/昆明.jpg",
					city_name:"昆明"
					},
					{
						img:"../../static/icon/重庆.jpg",
					city_name:"重庆"
					},
					{
						img:"../../static/icon/拉萨.jpg",
					city_name:"拉萨"
					},
					{
						img:"../../static/icon/西安.jpg",
					city_name:"西安"
					},
					{
						img:"../../static/icon/宝鸡.jpg",
					city_name:"宝鸡"
					},
					{
						img:"../../static/icon/兰州.jpg",
					city_name:"兰州"
					},
					{
						img:"../../static/icon/天水.jpg",
					city_name:"天水"
					},
					{
						img:"../../static/icon/酒泉.jpg",
					city_name:"酒泉"
					},
					{
						img:"../../static/icon/固原.jpg",
					city_name:"固原"
					},
					{
						img:"../../static/icon/银川.jpg",
					city_name:"银川"
					},
					{
						img:"../../static/icon/西宁.jpg",
					city_name:"西宁"
					},
					{
						img:"../../static/icon/乌鲁木齐.jpg",
					city_name:"乌鲁木齐"
					},
					{
						img:"../../static/icon/吐鲁番.jpg",
					city_name:"吐鲁番"
					},
					
					
					
					
				],
				scrollTop: 0,
				old: {
					scrollTop: 0,
					}
					};
			},
			
	/*	onLoad() {

		},
		
		},*/
		methods: {
			goDetail: function(e) {
			    let detail = {
			       // img:e.img,
					city_name:e.city_name
			    };
			    uni.navigateTo({
			        url: '../Beijing/Beijing?details=' + encodeURIComponent(JSON.stringify(detail))
			    });
			},
			callus(){
				uni.switchTab({
					url:'/pages/mine/mine'
				})
			},
		      
			    scroll: function(e) {
			  	console.log(e)
			  	this.old.scrollTop = e.detail.scrollTop
			  },
			  onNavigationBarButtonTap(e) {
			      uni.navigateTo({
			          url: "../cityselect/cityselect"
					   });     
			  },
		}
	}
</script>

<style>

.city
{
	background: #eee;
	overflow: hidden;
	margin-top: 10px;
	}
	
	

.tit{
	height:50px;
	line-height: 50px;
	color:#b50e03;
	text-align:center;
	letter-spacing: 20px;
	background: #fff;
	margin: 7rpx 0;
}
.tit_hotcity{
	height:50px;
	line-height: 50px;
	color:#333333;
	text-align:left;
	letter-spacing: 0px;
	background:#FFFFFF;
	font-size: 15px;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	margin: 7rpx 0;
	font-feature-settings:;
}
.citys_list{
	padding: 0 5rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.city_item
{
	background: #fff;
	width:355rpx;
	margin:15rpx 0 ;
	padding: 10rpx;
	box-sizing: border-box;	
	
}
.hot_city_item
{
	background:#FFFFFF;
	width:355rpx;
	margin:15rpx 0 ;
	padding: 10rpx;
	box-sizing: border-box;	
	display: inline-block;
}
.scroll-view-item_H {

			display: inline-block;

			width: 100%;

			height: 300rpx;

			line-height: 300rpx;

			text-align: center;

			font-size: 36rpx;

		}
.cityname{
	font-size: 28rpx;
	line-height: 50rpx;
	padding-bottom:30rpx;
	padding-top:20rpx;
	
}
image{
	width:100%;
	height:100px;
	display: block;
	margin: auto;
}
.scroll-view_H {

			white-space: nowrap;

			width: 100%;

		}



	
</style>
