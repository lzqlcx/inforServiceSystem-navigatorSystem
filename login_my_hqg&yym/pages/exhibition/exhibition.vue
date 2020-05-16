<template>
	<view class="exhMessage_qj">
		<!-- 动态绑定背景图片 -->
		<view class="exhShow_qj" :style="{backgroundImage: 'url(' + (exh_qj.exhCover_qj) + ')'}"></view>
		
		<!-- 展览信息 -->
		<view class="uni-title uni-common-mt exhTitle1_qj">{{exh_qj.exhTitle_qj}}</view>
		<view class="exhIntroCard_qj">
			<p v-html="exh_qj.exhIntro_qj"></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				exh_qj:{
					exhCover_qj:"http://pmtf69fab.pic37.websiteonline.cn/upload/2_ksdi.JPG",
					exhTitle_qj:"爱丽丝梦游仙境",
					exhIntro_qj:"&emsp;&emsp;《爱丽丝梦游仙境》（Alice in Wonderland）是迪士尼的一部3D立体电影，其灵感来自于英国童话大师刘易斯·卡罗尔的《爱丽斯漫游仙境》和《爱丽丝镜中奇遇记》。<br>&emsp;&emsp;由蒂姆·波顿执导，米娅·华希科沃斯卡、约翰尼·德普、海伦娜·邦汉·卡特和安妮·海瑟薇等联袂出演。影片于2010年3月26日在中国内地上映。<br>&emsp;&emsp;影片讲述了发生在爱丽丝上次梦游仙境的十三年后的故事，已经19岁的爱丽丝去一个庄园参加一个聚会，爱丽丝选择了逃跑，她跟着一只白兔钻进了一个洞，再次来到“仙境”。 "
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.exhMessage_qj{
	margin: 0 auto;
	max-width: 800rpx;
}
.exhShow_qj{
	background-repeat: no-repeat;
	background-size: 100% 100%;
	max-width: 800rpx;
    margin: 0 auto;
	height: 400rpx;
}
.exhTitle1_qj{
	font-size: 45rpx;
	margin: auto 15rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
}
.exhIntroCard_qj p{
	margin: auto 15rpx;
	font-size: 30rpx;
}
</style>
