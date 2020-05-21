<template>
	<view>
	        <view class="page-body">
	            <luch-audio src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3" play.sync="audioPlay"></luch-audio>
				<view class="page-section page-section-gap" style="text-align: center;">
				    <luch-audio 
					:src="src" 
					:poster="poster" 
					:name="name" 
					:author="author" 
					:play.sync="audioPlay"
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
	            play: true,
	            src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
	            poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
	            name: '博物馆讲解',
	            author: '云锦'
	        }
	    },
		components: {
			Audio
		},
		methods:{
			audioPlay() {
				this.$emit('update:play', true);
			},
			audioPause() {
				this.$emit('update:play', false);
			}
			}
	}
	
</script>

<style>
</style>
