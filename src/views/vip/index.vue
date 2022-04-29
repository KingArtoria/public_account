<template>
  <div>
    <div class="head">
      <div class="head_1" @click="changeTab(0)">单独购买</div>
      <div class="head_1" @click="changeTab(1)">火客会员</div>
      <div class="head_1" @click="changeTab(2)">黑卡服务</div>
      <div class="head_2" id="head_2" />
    </div>
    <div class="content">
      <div class="content_1" v-if="active == 0">
        <div class="content_1_1" v-for="(item, index) in buyInfo" :key="index">
          <div class="content_1_1_1">
            <img src="http://account.channel.bdhuoke.com/img/libao@2x.png" class="content_1_1_1_1" />
            <div class="content_1_1_1_2">
              <div class="content_1_1_1_2_1">{{ item.name }}</div>
              <div class="content_1_1_1_2_2">{{ item.title }}</div>
              <div class="content_1_1_1_2_3">{{ item.tag }}</div>
            </div>
          </div>
          <div class="content_1_1_2">
            <div class="content_1_1_2_1">
              <div class="content_1_1_2_1_1">￥</div>
              <div class="content_1_1_2_1_2">{{ item.price }}</div>
            </div>
            <div class="content_1_1_2_2">购买</div>
          </div>
        </div>
        <img src="http://account.channel.bdhuoke.com/img/lxkf@2x.png" class="content_1_2" />
        <img src="http://account.channel.bdhuoke.com/img/xmslzas@2x.png" class="content_1_3" />
      </div>
      <div class="content_2" v-if="active == 1">
        <div class="content_2_1">
          <div class="content_2_1_1" @click="changeVipType(0)">普通会员</div>
          <div class="content_2_1_2" @click="changeVipType(1)">超级会员</div>
          <div class="content_2_1_2" @click="changeVipType(2)">企业会员</div>
          <div class="content_2_1_3" id="content_2_1_3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BUY_CONST } from '../../utils/const';
export default {
  data() {
    return {
      // TODO tab名称
      active: '',
      // TODO 购买信息数组
      buyInfo: [],
      // TODO 会员类型
      vipType: '',
    };
  },
  methods: {
    // ? 切换tabs
    changeTab(tab) {
      this.active = tab;
      switch (tab) {
        case 0:
          document.getElementById('head_2').style.transform = 'translateX(-8rem)';
          break;
        case 1:
          document.getElementById('head_2').style.transform = 'translateX(0)';
          break;
        case 2:
          document.getElementById('head_2').style.transform = 'translateX(8rem)';
          break;
      }
    },
    // ? 初始化参数
    initParams() {
      this.buyInfo = BUY_CONST;
    },
    // ? 切换会员类型
    changeVipType(type) {
      switch (type) {
        case 0:
          document.getElementById('content_2_1_3').style.transform = 'translateX(-8rem)';
          break;
        case 1:
          document.getElementById('content_2_1_3').style.transform = 'translateX(0)';
          break;
        case 2:
          document.getElementById('content_2_1_3').style.transform = 'translateX(8rem)';
          break;
      }
    },
  },
  mounted() {
    // ? 初始化参数
    this.initParams();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
