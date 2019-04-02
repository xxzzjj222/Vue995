import Vue from 'vue'
import {
    Header
} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


Vue.component(Header.name, Header)

import app from './App.vue'


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router:router
})

