<template>
	<view>
	        <view class="page-body">
	            <view class="page-section page-section-gap" style="text-align: center;">
	                <luch-audio 
					:src="src" 
					:poster="poster" 
					:name="name" 
					:author="author" 
					:play="audioPlay"
					></luch-audio>
	            </view>
	        </view>
	    </view>
</template>

<script>
	//const innerAudioContext = uni.createInnerAudioContext();
	import Audio from '../../components/luch-audio/luch-audio.vue'
	export default {
	    data() {
	        return {
	            current: {
	                poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
	                name: '博物馆讲解',
	                author: '云锦',
					src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
	            }
	        }
	    },
		components: {
			Audio
		},
		methods:{
		 }
	}
</script>

<style>
</style>
