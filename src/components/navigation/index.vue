<template>
  <div class="navigation">
    <div class="navigation_1" @click="go('/')">
      <img src="http://account.channel.bdhuoke.com/img/shouye_2@2x.png" class="navigation_1_1" />
      <div class="navigation_1_2">首页</div>
    </div>
    <div class="navigation_1" @click="go('/vip')">
      <img src="http://account.channel.bdhuoke.com/img/huiyuan-2@2x.png" class="navigation_1_1" />
      <div class="navigation_1_2">会员</div>
    </div>
    <div class="navigation_1" @click="go('/')">
      <img src="http://account.channel.bdhuoke.com/img/wode-2@2x.png" class="navigation_1_1" />
      <div class="navigation_1_2">我的</div>
    </div>
  </div>
</template>

<script>
export default {
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
