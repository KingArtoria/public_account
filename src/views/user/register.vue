<template>
  <div class="page">
    <p class="title">火客账户绑定</p>
    <div class="input-wrap">
      <img src="http://account.channel.bdhuoke.com/img/user_shouji@2x.png" alt="" class="img img1">
      <div class="line"></div>
      <input v-model="formData.phone" type="text" placeholder="请输入手机号" class="input"
        style="flex: 1;margin-right: 1.28rem;">
    </div>
    <div class="input-wrap code-wrap">
      <img src="http://account.channel.bdhuoke.com/img/user_fangyu@2x.png" alt="" class="img img2">
      <div class="line"></div>
      <input v-model="formData.code" type="text" placeholder="请输入验证码" class="input" style="width: 9rem">
      <div class="code-btn" @click="sendCode">{{ codeText }}</div>
    </div>
    <div class="btn app-flex-center" @click="submit">绑定</div>
  </div>
</template>
<script>
import { validPhone } from '../../utils/index'
export default {
  data() {
    return {
      formData: {
        phone: '', // 手机号
        code: '', // 验证码
      },
      countDown: 60, // 验证码发送时间间隔
      sendLoading: false, // 是否已发送验证码
    };
  },
  computed: {
    codeText() {
      return this.sendLoading ? `已发送(${this.countDown})` : '获取验证码'
    }
  },
  methods: {
    // 绑定手机号
    submit() {
      if (!validPhone(this.formData.phone)) {
        this.$toast('手机号格式不正确')
        return
      }
      if (!this.formData.code) {
        this.$toast('请填写验证码')
        return
      }
      this.$toast.loading({
        message: '正在提交...',
        forbidClick: true,
      });
      setTimeout(() => {
        this.$toast.clear()
        this.$router.push('/success')
      }, 1000);
    },
    // 发送验证码
    sendCode() {
      if (this.sendLoading) {
        return
      }
      if (!validPhone(this.formData.phone)) {
        this.$toast('手机号格式不正确')
        return
      }
      this.sendLoading = true
      const timer = setInterval(() => {
        this.countDown--
        if (this.countDown === 0) {
          clearInterval(timer)
          this.sendLoading = false
          this.countDown = 60
        }
      }, 1000)
      // sendSms({
      //   mobile: formData.value.phone,
      //   type: "sign"
      // }).then(() => {
      //   showMsg('验证码已发送')
      // })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./register.scss";
</style>