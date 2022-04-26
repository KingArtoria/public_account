<template>
  <div id="app">
    <Navigation />
    <router-view style="padding-bottom: 4.096rem" />
  </div>
</template>
<script>
import Navigation from './components/navigation/index.vue';
import Vue from 'vue';
export default {
  methods: {
    // ? 初始化参数
    initParams() {
      Vue.prototype._imgUrl = 'http://account.channel.bdhuoke.com/img/';
    },
  },
  mounted() {
    // ? 初始化参数
    this.initParams();
  },
  components: { Navigation },
};
</script>
