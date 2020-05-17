<template>
	<view>
	<view><!--如果没有初始的经纬度也可以显示！所以我现在删掉他进行测试，如果不行的话后期再加上，同时我也删掉了scale，它可以自动决定缩放大小来显示所有点-->
		<map class="map" 
		:markers="markers"
		:include-points="includepoints"
	></map>
	</view>
<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in chinaLocation" :key="key" @click="goDetail(value)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.cover"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.museumname }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.Location }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
	</view>
	
</template>
<script>
	export default {
		data() {
			return {
			//	longitude1: 116.403414,
			//	latitude1: 39.924091,
			//	scale: 13,
				markers: [],//存储具体经纬度等
				includepoints:[],//和markers数组完全相等，存储缩放使得内部所有点均能显示
				//从数据库获取博物馆名称和中文地址,id,图片后，存在chinaLocation中
				chinaLocation:[
					
				    {
						id:"1",
						museumname:"故宫博物院",
						Location:"北京市故宫博物院",
						cover:"../../static/logo.png"
					},
					{
						id:"2",
						museumname:"天坛",
						Location:"北京市天坛",
						cover:"../../static/logo.png"
					},
					{
						id:"3",
						museumname:"北海公园",
						Location:"北京市北海公园",
						cover:"../../static/logo.png"
					},
					{
						id:"4",
						museumname:"松山国家森林公园",
						Location:"北京市延庆区松山国家森林公园",
						cover:"../../static/logo.png"
					},
					{
						id:"5",
						museumname:"十三陵水库",
						Location:"北京市十三陵水库",
						cover:"../../static/logo.png"
					}
				]
			};
		},
		onLoad(event) {
		    console.log(event);
		    this.banner = JSON.parse(decodeURIComponent(event.details));
		    //详情标题 接受的banner只有一个city_name从前页面传来
		    uni.setNavigationBarTitle({
		        title: this.banner.city_name
		    });
			//需要一个接口，根据前面页面传进来的唯一一个城市的名称将该城市的所有博物馆写入chinalocation中。我现在假定该功能已经实现了。--------------
			//所以下来将所有博物馆转化成经纬度存入markers数组和includepoints数组当中。
			let i=0;
			for (i = 0; i < this.chinaLocation.length; i++) {
			  console.log(i);
			  uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					//这里必须用箭头函数，其他函数形式会报错 wdnmd 上式将地址转化成经纬度
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{//打印转化的经纬度
						console.log(res.data.result.location.lng);
						console.log(res.data.result.location.lat);
						//将得到的经纬度push进markers数组里
						let item=this.markers.push({
					longitude:res.data.result.location.lng ,
					latitude: res.data.result.location.lat,
					iconPath: '../../static/icon/定位.png',
					label: {
						content:"标记",
					},
					width: 30,
					height: 30,
			
					})
					let item2=this.includepoints.push({//push进includepoints中使得地图初始显示包含这些点
						longitude:res.data.result.location.lng ,
						latitude: res.data.result.location.lat,
					})
					}
				})
			
				}
				
				
				
			
		},
		/*onLoad(){
			
			this.get();
			
		},*/
		methods: {
			goDetail: function(e) {
			    let museumdetail = {
			       // img:e.img,
					museum_name:e.museumname
			    };
			    uni.navigateTo({
			        url: '../message/message?details=' + encodeURIComponent(JSON.stringify(museumdetail))//奶奶的 为什么不能用绝对路径？
			    });
			},
			get() {
				let i=0;
				for (i = 0; i < this.chinaLocation.length; i++) {
				  console.log(i);
				  uni.request({
					  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
						url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
						//这里必须用箭头函数，其他函数形式会报错 wdnmd 上式将地址转化成经纬度
						//远程调用记得注意异步的问题，所以会发送错误
						success:res=>{//打印转化的经纬度
							console.log(res.data.result.location.lng);
							console.log(res.data.result.location.lat);
							//将得到的经纬度push进markers数组里
							let item=this.markers.push({
						longitude:res.data.result.location.lng ,
						latitude: res.data.result.location.lat,
						iconPath: '../../static/icon/定位.png',
						label: {
							content:"标记",
						},
						width: 30,
						height: 30,

						})
						let item2=this.includepoints.push({//push进includepoints中使得地图初始显示包含这些点
							longitude:res.data.result.location.lng ,
							latitude: res.data.result.location.lat,
						})
						}
					})
				
					}
				},
			check() {
				console.log(1,this.markers1[0].longitude);
			}
		}
		
	}
</script>
<style>
	.map {
		width: 750rpx;
		height: 375rpx;
	}
	.museum_list
	{
		background: #eee;
		margin-top: 10px;
		}
	.museum_item
	{
		line-height: 100px;
		background-color: #FFFFFF;
		margin: 10rpx 0;
		padding: 5rpx;
	}
	.uni-media-head-pictrue {
		height: 375rpx;
		width: 750rpx;
	}
	.list_row {
		height: 375rpx;
		width: 750rpx;
		background-color: #007AFF;
	}
	.uni-media-list-logo {
	    width: 180upx;
	    height: 140upx;
	}
	 .uni-media-list-body {
	     height: auto;
	     justify-content: space-around;
	 }
	  
	 .uni-media-list-text-top {
	     height: 74upx;
	     font-size: 28upx;
	     overflow: hidden;
	 }
	 .uni-media-list-text-bottom {
	     display: flex;
	     flex-direction: row;
	     justify-content: space-between;
	 }

	
</style>
