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
Vue.prototype.APP_Id = 'wxa863a4ba2dfc5c65'
new Vue({ router, render: h => h(App) }).$mount('#app')
