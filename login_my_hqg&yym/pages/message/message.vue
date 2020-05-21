<template>
	<view class="museum_yrn">
		<!-- 头部模块 -->
		<view class="musuemPicture_yrn">
			<!-- 动态绑定背景图片 -->
			<view class="exhShow_yrn" :style="{backgroundImage: 'url(' + (array_yrn.image_yrn) + ')'}"></view>
			<view class="musuemTitle_yrn" v-for="item in museumInfo" :key="item.pk">
				<text class="title_yrn">{{item.fields.museumname}}</text>
				<p class="p_yrn">{{array_yrn.p_yrn}}</p>
			</view>
		</view>
		<view class="navigation_yrn">
		    <ul>
		        <li><a href="#intro_yrn">简介</a></li>
		        <li><a href="#explain_qj">讲解</a></li>
		        <li><a href="#collection_qj">藏品</a></li>
		        <li><a href="#exhibition_qj">展览</a></li>
		    </ul>
		</view>
		<view class="introduction_yrn" v-for="item in museumInfo" :key="item.pk">
			<h5 id="intro_yrn">简介</h5>
			<p class="ppp_yrn">{{item.fields.introduction}}</p>
			<!-- 展开 收起部分 start-->
			<!-- end  -->
		</view>
		
		<!-- 讲解模块 -->
		<view class="card_qj">
			<view id="explain_qj">
                <h5>讲解</h5>
            </view>
 			<view class="explainTitle_qj">
				<h6>{{array_yrn.explainTitle1_qj}}</h6>
			</view>
			<view class="guideIntro_qj">
                <p>
                    <!-- 静态请求图片 待更改-->
 					<img src="static/guide01.png" alt="讲解员">
                    <text>{{array_yrn.guideName1_qj}}</text>
					<text class="guideLogo_qj">{{array_yrn.guideTag1_qj}}</text>
                </p>
                <button class="unlock_qj" @tap="goExplain_yrn()">听讲解</button>
				<button class="unlock_yrn" @tap="goFeed_yrn()">评论</button>
            </view>
		</view>
<!-- 		<view class="page-body">
		    <view class="page-section page-section-gap" style="text-align: center;">
		        <luch-audio 
				:src="src" 
				:poster="poster" 
				:name="name" 
				:author="author" 
				:play="audioPlay"
				></luch-audio>
		    </view>
		</view> -->
		<!-- 讲解录制 -->
		<view class="recordExplain_qj">
			<i class="fa fa-microphone" aria-hidden="true" @tap="goRecord_yrn()"> 我也要为大家讲一段</i>
		</view>
	
		<!-- 藏品模块 -->
		<view class="card_qj">
		    <view id="collection_qj">
		        <h5>藏品展示</h5>
		    </view>
		    <view class="picContent_qj">
		        <ul>
					<!-- 静态请求图片&&页面跳转 -->
		            <li @tap="goDetail_yrn()"><img src="/static/guide01.png" title="藏品图"><br><text>{{picList_qj.colName1}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName2}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName3}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName4}}</text></li>
		        </ul>
		    </view>
		</view>
		
		<!-- 后端渲染-藏品模块 -->
		<view v-for="item in collectionList" :key="item.pk">
			<image :src="item.fields.collectionimage">{{item.fields.collectionname}}</image>
		</view>
		
		<!-- 展览模块 -->
		<view class="card_qj">
		    <view id="exhibition_qj">
		        <h5>相关展览</h5>
		    </view>
		    <view class="picContent_qj">
		        <ul>
					<!-- 静态请求图片&&页面跳转 -->
		            <li @tap="goDetail_qj()"><img src="/static/guide01.png" title="展览图"><br><text>{{picList_qj.exhName1}}</text></li>
		            <li><img src="" title="展览图"><br><text>{{picList_qj.exhName2}}</text></li>
		            <li><img src="" title="展览图"><br><text>{{picList_qj.exhName3}}</text></li>
		            <li><img src="" title="展览图"><br><text>{{picList_qj.exhName4}}</text></li>
		        </ul>
		    </view>
		</view>
		<!-- 后端渲染-展览模块 -->
		<view v-for="item in exhibitionList" :key="item.pk">
			<image :src="item.fields.exhibition_picture">{{item.fields.exhibitiontheme}}</image>
		</view>
		
	</view>
</template>

<script>
	import Audio from '../../components/luch-audio/luch-audio.vue'
	export default {
		data() {
			return {
				array_yrn: {
					mode:'widthFix',
					image_yrn: 'https://www.dpm.org.cn/Uploads/Picture/2020/04/29/s5ea9744238b72.jpg',
					title_yrn: "故宫博物馆",
					p_yrn: "北京的代表性景点，古老中国的特征",
					ppp_yrn: "根据当前北京市疫情防控形势，故宫博物院自2020年5月1日起有序开放，实行预约、错峰、限流参观。相关事宜公告如下.有人说，不到西安，就不算到中国，不见兵马俑，就不算到西安。是的，西安的奇迹太多了，而兵马俑则可以说是奇迹中的奇迹。最古老的兵马俑，如今已经成了西安乃至中国的金字名片。",
					// explainTitle1_qj: "故宫博物馆讲解",
					guideName1_qj: "  三毛游",
					guideTag1_qj: "官方讲解"
				},
				current: {
				    poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
				    name: '博物馆讲解',
				    author: '云锦',
					src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
				},
				picList_qj: {
					colName1: "一号坑",
					colName2: "车马俑",
					colName3: "立射俑",
					colName4: "跪射俑",
					exhName1: "展览一",
					exhName2: "展览二",
					exhName3: "展览三",
					exhName4: "展览四"
				},
				museumInfo: [],
				exhibitionList: [],
				collectionList: [],
			}
		},
		components: {
			Audio
		},
		methods: {
			goDetail_qj: function() {
				uni.navigateTo({
				    url: '../exhibition/exhibition'
				});
			},
			goDetail_yrn: function() {
				uni.navigateTo({
				    url: '../collection/collection'
				});
			},
			goFeed_yrn: function() {
				uni.navigateTo({
					url:'/pages/message/feedback/feedback'
				});
			},
			goExplain_yrn: function(){
				uni.navigateTo({
					url:'../explain/explain'
				});
			},
			goRecord_yrn:function(){
				uni.navigateTo({
					url:'../record/record'
				});
			},
			//获取博物馆信息
			async getMuseumInfo() {
				const res = await this.$myRequest({
					url: '/museumtest/75/'
				})
				// console.log(res)
				this.museumInfo = res.data.data.items
			},
			//获取展览信息
			async getExhibitionInfo() {
				const res = await this.$myRequest({
					url: '/exhibitiontest/75/'
				})
				// console.log(res)
				this.exhibitionList = res.data.data.items
			},
			//获取藏品信息
			async getCollectionInfo() {
				const res = await this.$myRequest({
					url: '/collectiontest/75/'
				})
				// console.log(res)
				this.collectionList = res.data.data.items
			}
		},
		onLoad() {
			this.getMuseumInfo()
			this.getExhibitionInfo()
			this.getCollectionInfo()
		}
	}
</script>

<style>
@import url("./message.css");
</style>
