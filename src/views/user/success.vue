<template>
  <div class="page">
    <img src="" class="img" alt="" />
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
