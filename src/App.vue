<template>
  <div id="app">
    <Navigation
      v-if="url != '/details' && url != '/function' && url != '/publish' && url != '/guarantee' && url != '/public'" />
    <router-view :style="isPadding ? 'padding-bottom: 4.096rem' : ''" />
  </div>
</template>
<script>
import Navigation from './components/navigation/index.vue';
import Vue from 'vue';
import { getOpenid, getToken } from './utils/api';
export default {
  data() {
    return {
      url: '',
      isPadding: false,
    };
  },
  methods: {
    // ? 初始化参数
    initParams() {
      Vue.prototype._imgUrl = 'http://account.channel.bdhuoke.com/img/';
    },
    // 获取openid
    getCode() {
      const code = this.getUrlParam('code');
      const scope = 'snsapi_userinfo';
      const redirectUrl = 'http://account.channel.bdhuoke.com';
      if (code == null || code === '') {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.APP_Id}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code&scope=${scope}&state=1#wechat_redirect`;
      } else {
        getOpenid({ code }).then(res => {
          Vue.prototype.OPEN_ID = res.openid;
          getToken({ wxgzh_openid: res.openid }).then(res => {
            if (res.code == 1) {
              Vue.prototype.TOKEN = res.data;
            }
          });
        });
      }
    },
    // ? 获取指定参数
    getUrlParam(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
  },
  mounted() {
    // ? 初始化参数
    this.initParams();
    // 获取路由
    setTimeout(() => {
      if (this.url != '/details' && this.url != '/function' && this.url != '/publish' && this.url != '/guarantee' && this.url != '/public') {
        this.getCode();
      }
    }, 200);
  },
  watch: {
    $route(to, from) {
      this.url = to.path;
      if (to.path == '/details' || to.path == '/function' || to.path == '/publish' || to.path == '/guarantee' || to.path == '/public') {
        this.isPadding = false;
      }
    },
  },
  components: { Navigation },
};
</script>
