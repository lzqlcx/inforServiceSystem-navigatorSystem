<template>
	<view>
		<button @click="getUrl">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// museum: []
			}
		},
		methods: {
			async getUrl() {
				const res = await this.$myRequest ({
					url: '/collectiontest/75/'
				})
				console.log(res)
				// this.museum = res.data
			}
		},
		onLoad() {
			this.getUrl()
		}
	}
</script>

<style>

</style>
