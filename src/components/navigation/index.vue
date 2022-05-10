<template>
  <div class="navigation">
    <div v-for="item in tabbar" :key="item.path" class="navigation_1" @click="go(item.path)">
      <img :src="item.path === $route.fullPath ? item.activeImg : item.img" class="navigation_1_1" />
      <div class="navigation_1_2" :class="{active: item.path === $route.fullPath}">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          title: '首页',
          img: 'http://account.channel.bdhuoke.com/img/shouye_1@2x.png',
          activeImg: 'http://account.channel.bdhuoke.com/img/shouye_2@2x.png',
          path: '/'
        },
        {
          title: '会员',
          img: 'http://account.channel.bdhuoke.com/img/huiyuan-1@2x.png',
          activeImg: 'http://account.channel.bdhuoke.com/img/huiyuan-2@2x.png',
          path: '/vip'
        },
        {
          title: '我的',
          img: 'http://account.channel.bdhuoke.com/img/wode-1@2x.png',
          activeImg: 'http://account.channel.bdhuoke.com/img/wode-2@2x.png',
          path: '/user'
        }
      ]
    }
  },
  methods: {
    // ? 路由跳转
    go(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
