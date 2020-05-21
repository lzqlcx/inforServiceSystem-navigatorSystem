<template>
	<view>
		<view>
			<button @click="getUrl">点击</button>
		</view>
		<view v-for="ite in museum" :key="ite.pk">
			{{ite.fields.introduction}}
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
					url: '/museumtest/75/'
				})
				console.log(res)
				console.log("dsada")
				console.log(res.data)
				console.log(res.data.data)
				console.log(res.data.data.items)
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
