<template>
	<view>
		<view>
			<button @click="getUrl">点击</button>
		</view>
		<view v-for="ite in museum" :key="ite.pk">
			{{ite.fields.collectionintroduction}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				museum: []
			}
		},
		methods: {
			async getUrl() {
				const res = await this.$myRequest ({
					url: '/museumtesttest/',
					data: {
						id : 75
					}
				})
				console.log(res)
				this.museum = res.data.data.items
			}
		},
		onLoad() {
			this.getUrl()
			
		}
	}
</script>

<style>

</style>
