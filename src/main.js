import Vue from 'vue'
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
//Vue.http.options.root='http://localhost:8080'

import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH-mm-ss"){
    return moment(dataStr).format(pattern)
})

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})