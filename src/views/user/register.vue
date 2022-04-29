<template>
  <div class="page">
    <p class="title">火客账户绑定</p>
    <div class="input-wrap">
      <img src="http://account.channel.bdhuoke.com/img/user_shouji@2x.png" alt="" class="img img1">
      <div class="line"></div>
      <input v-model="formData.phone" type="text" placeholder="请输入手机号" class="input" style="flex: 1;margin-right: 1.28rem;">
    </div>
    <div class="input-wrap code-wrap">
      <img src="http://account.channel.bdhuoke.com/img/user_fangyu@2x.png" alt="" class="img img2">
      <div class="line"></div>
      <input v-model="formData.phone" type="text" placeholder="请输入手机号" class="input" style="width: 9rem">
      <div class="code-btn">获取验证码</div>
    </div>
    <div class="btn app-flex-center">登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        phone: '', // 手机号
        code: '', // 验证码
      }
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./register.scss";
</style>