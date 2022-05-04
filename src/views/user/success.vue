<template>
  <div class="page">
    <img src="http://account.channel.bdhuoke.com/img/user_bdcg@2x.png" class="img" alt="" />
    <div class="text">
      <p class="title">火客账号绑定成功!</p>
      <p class="desc">绑定成功的账号同时享有火客APP账号权益。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 路由跳转
    nav(path) {
      this.$router.push(path);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "./success.scss";
</style>
