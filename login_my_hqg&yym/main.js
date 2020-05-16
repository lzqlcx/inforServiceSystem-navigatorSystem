
import Vue from 'vue'
import App from './App'
import './static/font-awesome-4.7.0/css/font-awesome.min.css'
Vue.config.productionTip = false
/*
Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero";
Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}*/

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
