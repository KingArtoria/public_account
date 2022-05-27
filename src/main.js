import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './utils/rem';
import './styles/app.scss';
Vue.use(Vant);
Vue.config.productionTip = false
/* 挂载全局变量 */
// appid
Vue.prototype.APP_Id = 'wx1d85dd6510891110'
new Vue({ router, render: h => h(App) }).$mount('#app')
