<template>
  <div id="app">
    <Navigation />
    <router-view style="padding-bottom: 4.096rem" />
  </div>
</template>
<script>
import Navigation from "./components/navigation/index.vue";
import Vue from "vue";
export default {
  methods: {
    // ? 初始化参数
    initParams() {
      Vue.prototype._imgUrl = "http://account.channel.bdhuoke.com/img/";
    },
    // 获取openid
    getCode() {
      const code = this.getUrlParam("code"); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      /* 
        网页授权方式
        1、snsapi_base：静默回调，只能获取到openid
        2、snsapi_userinfo：获取用户信息，需要用户手动点确认
      */
      const scope = "snsapi_base";
      // 公众号地址
      const redirectUrl = "http://account.channel.bdhuoke.com";
      if (code == null || code === "") {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          this.APP_Id
        }&redirect_uri=${encodeURIComponent(
          redirectUrl
        )}&response_type=code&scope=${scope}&state=1#wechat_redirect`;
      } else {
        // 从微信返回的路径里获取到openid参数，挂载到Vue原型上
        Vue.prototype.OPEN_ID = code;
      }
    },
    getUrlParam(name) {
      // 获取url指定参数
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标的正则表达式对象
      var r = window.location.search.substr(1).match(reg); // 匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; // 返回参数值
    },
  },
  mounted() {
    // ? 初始化参数
    this.initParams();
    // 获取openid
    this.getCode();
  },
  components: { Navigation },
};
</script>
