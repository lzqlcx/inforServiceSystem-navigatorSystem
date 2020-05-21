<template>
	<view>
		<view class="exhMessage_qj" v-for="item in exhibitionInfo">
			<!-- 动态绑定背景图片 -->
			<view class="exhShow_qj" :style="{backgroundImage: 'url(' + (item.fields.exhibition_picture) + ')'}"></view>
			
			<!-- 展览信息 -->
			<view class="uni-title uni-common-mt exhTitle1_qj">{{item.fields.exhibitiontheme}}</view>
			<view class="exhIntroCard_qj">
				<p v-html="item.fields.exhibitionintroduction"></p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {				
				exhibitionInfo: [],
				pk: 0,
			}			
		},
		methods: {
			async getExhibitionInfo() {
				const res = await this.$myRequest({
					// url: "/collectionInfo/4535/",
					url: "/exhibitionInfo/"+this.pk+"/",
				})
				console.log(res)
				this.exhibitionInfo = res.data.data.items
			} 
		},
		onLoad(options) {
			// console.log(options)
			this.pk = options.pk
			this.getExhibitionInfo()
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
