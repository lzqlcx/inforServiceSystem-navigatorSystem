<template>
	
	<view class="home">
		<swiper circular indicator-dots>
			<swiper-item v-for="item in listData" :key="item.id">
				<image :src="item.cover"></image>
			</swiper-item>
		</swiper>
		<view class="uni-title uni-common-mt" >
			当地博物馆
			<text>\n横向布局</text>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120" >
				<!-- <view id="demo1" class="scroll-view-item_H uni-bg-red">展览111</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">展览2</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">展览3</view> -->
				<view class="scroll-view-item_H" v-for="item in listData" :key="item.id">
					<image :src="item.cover" @tap="goDetail_yrn()"></image>
				</view>
			</scroll-view>
		</view>
		<view>
			<view class="uni-title uni-common-mt" >
				新闻
				<text>\n纵向布局</text>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" v-on:click="goDetail(value)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.cover"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.title }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.author_name }}</text>
								<text>{{ value.published_at }}</text>
							</view>
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
                listData: [{
                        id: "109121",                       
                        title: "湖南省博物馆大型剧院展览：只有你想不到",
                        author_name: "徐子",
                        cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
                        published_at: "2019-12-30 15:20:00"
                    },
                    {
                        id: "109122",                       
                        title: "北京火车博物馆：工业革命后的尘埃？",
                        author_name: "半佛仙人",
                        cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
                        published_at: "2019-12-30 15:22:00"
                    },
                    {
                        id: "109123",
                        title: "「北京心里博物馆：2019我为什么还在坚持",
                        author_name: "燃财经",
                        cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
                        published_at: "2019-12-30 15:26:00"
                    },
                    {
                        id: "109124",
                        title: "如何理财？北京理财展馆会告诉你！",
                        author_name: "36氪的朋友们",
                        cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
                        published_at: "2019-12-30 15:29:00"
                    },
					{
					        id: "109125",                       
					        title: "湖南省博物馆大型剧院展览：只有你想不到",
					        author_name: "徐子",
					        cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
					        published_at: "2019-12-30 15:20:00"
					    },
					    {
					        id: "109126",                       
					        title: "北京火车博物馆：工业革命后的尘埃？",
					        author_name: "半佛仙人",
					        cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
					        published_at: "2019-12-30 15:22:00"
					    },
					    {
					        id: "109127",
					        title: "「北京心里博物馆：2019我为什么还在坚持",
					        author_name: "燃财经",
					        cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
					        published_at: "2019-12-30 15:26:00"
					    },
					    {
					        id: "109128",
					        title: "如何理财？北京理财展馆会告诉你！",
					        author_name: "36氪的朋友们",
					        cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
					        published_at: "2019-12-30 15:29:00"
					    }
                ],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
            };
        },
        onLoad() {
        },
        methods: {
            goDetail: function(e) {
                let detail = {
                    author_name: e.author_name,
                    cover: e.cover,
                    id: e.id,
                    
                    published_at: e.published_at,
                    title: e.title
                };
                uni.navigateTo({
                    url: '../details/details?detailDate=' + encodeURIComponent(JSON.stringify(detail))
                });
            },
			goDetail_yrn: function() {
				uni.navigateTo({
				    url: '../message/message'
				});
			},
			scroll: function(e) {
				console.log(e,'list')
				this.old.scrollTop = e.detail.scrollTop
			},
			
        }
    };
</script>
<style lang="scss">
	.home {
		swiper{
			height: 380rpx;
			width:750rpx ;
			image{
				width: 100%;
				height: 100%;
			}
		}
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
		.scroll-view_H {
			white-space: nowrap;			display: flex;
			width: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 70%;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
</style>
 