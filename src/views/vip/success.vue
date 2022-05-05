<template>
  <div>
    <div class="content">
      <img src="http://account.channel.bdhuoke.com/img/zfcg@2x.png" class="content_1" />
      <div class="content_2">支付成功</div>
      <div class="content_3">联系客服发布公众号项目</div>
      <div class="content_4" @click="copyText('18511169119')">
        <div class="content_4_1">客服电话：</div>
        <div class="content_4_2">18511169119</div>
      </div>
      <div class="content_4" @click="copyText('XYLD01')">
        <div class="content_4_1">客服微信：</div>
        <div class="content_4_2">XYLD01</div>
        <div class="content_4_3">(点击复制)</div>
      </div>
      <img src="http://39.106.208.234/pic/img_/rwmsw.png" class="content_5" />
      <div class="content_6">(客服微信)</div>
    </div>
  </div>
</template>

<script>
import { copyToClip } from '../../utils';
export default {
  methods: {
    // ? 复制
    copyText(text) {
      copyToClip(text);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './success.scss';
</style>
