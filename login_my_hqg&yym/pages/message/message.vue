<template>
	<view class="museum_yrn">
		<!-- 头部模块 -->
		<view class="musuemPicture_yrn">
			<!--<image :mode="array_yrn.mode" :src="array_yrn.image_yrn"></image>-->
			<view class="musuemTitle_yrn">
				<text class="title_yrn">{{array_yrn.title_yrn}}</text>
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
		<view class="introduction_yrn">
			<h5 id="intro_yrn">简介</h5>
			<p class="ppp_yrn">{{array_yrn.ppp_yrn}}</p>
			<!-- 展开 收起部分 start-->
			<!-- end  -->
		</view>
		
		<!-- 讲解模块 -->
		<view class="card_qj">
			<view id="explain_qj">
                <h5>多风格讲解</h5>
            </view>
			<view class="explainTitle_qj">
				<h6>{{array_yrn.explainTitle1_qj}}</h6>
			</view>
			<!-- <view class="tag_qj">
				<ul>
					<li>{{array_yrn.tag1_qj}}</li>
					<li>{{array_yrn.tag2_qj}}</li>
					<li>{{array_yrn.tag3_qj}}</li>
					<li>{{array_yrn.tag4_qj}}</li>
				</ul>
				<text style="color:#ffd800">
					★ ★ ★ ★ ★
				</text>
			</view> -->
			<!-- <view class="explainPoint_qj">
                <p>{{array_yrn.point1_qj}}<br><text>讲解点</text></p>
                <p>{{array_yrn.point2_qj}}<br><text>收听人次</text></p>
                <p>{{array_yrn.point3_qj}}<br><text>讲解时长</text></p>
                <p>{{array_yrn.point4_qj}}<br><text>游玩时间</text></p>
            </view>
			<view class="audition_qj">
                <button><i class="fa fa-play" aria-hidden="true"></i> 试听1</button>
                <button><i class="fa fa-play" aria-hidden="true"></i> 试听2</button>
            </view> -->
			<view class="guideIntro_qj">
                <p>
                    <!-- 静态请求图片 待更改-->
					<img src="static/guide01.png" alt="讲解员">
                    <text>{{array_yrn.guideName1_qj}}</text>
					<text class="guideLogo_qj">{{array_yrn.guideTag1_qj}}</text>
                </p>
                <button class="unlock_qj">开始导览</button>
            </view>
		</view>
		
		<!-- 讲解录制 -->
		<view class="recordExplain_qj">
			<i class="fa fa-microphone" aria-hidden="true"> 我也要为大家讲一段</i>
		</view>
		
		<!-- 藏品模块 -->
		<view class="card_qj">
		    <view id="collection_qj">
		        <h5>镇馆之宝</h5>
		    </view>
		    <view class="picContent_qj">
		        <ul>
					<!-- 静态请求图片 -->
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName1}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName2}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName3}}</text></li>
		            <li><img src="" title="藏品图"><br><text>{{picList_qj.colName4}}</text></li>
		        </ul>
		    </view>
		</view>
		
		<!-- 展览模块 -->
		<view class="card_qj">
		    <view id="exhibition_qj">
		        <h5>热门展览</h5>
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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array_yrn: {
					mode:'widthFix',
					image_yrn: 'https://www.dpm.org.cn/Uploads/Picture/2020/04/29/s5ea9744238b72.jpg',
					title_yrn: "故宫博物馆",
					p_yrn: "北京的代表性景点，古老中国的特征",
					ppp_yrn: "根据当前北京市疫情防控形势，故宫博物院自2020年5月1日起有序开放，实行预约、错峰、限流参观。相关事宜公告如下.有人说，不到西安，就不算到中国，不见兵马俑，就不算到西安。是的，西安的奇迹太多了，而兵马俑则可以说是奇迹中的奇迹。最古老的兵马俑，如今已经成了西安乃至中国的金字名片。",
					explainTitle1_qj: "故宫博物馆讲解",
					/* tag1_qj: "手动点读",
					tag2_qj: "历史类",
					tag3_qj: "中国一级",
					tag4_qj: "主题",
					point1_qj: "56个",
					point2_qj: "1万",
					point3_qj: "17分钟",
					point4_qj: "3小时", */
					guideName1_qj: "  三毛游",
					guideTag1_qj: "官方讲解"
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
				}
			}
		},
		methods: {
			goDetail_qj: function() {
				uni.navigateTo({
				    url: '../exhibition/exhibition'
				});
			}
		}
	}
</script>

<style>
@import url("./message.css");
</style>
