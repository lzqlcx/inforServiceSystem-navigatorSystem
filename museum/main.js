import Vue from 'vue'
import App from './App'
import './static/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
