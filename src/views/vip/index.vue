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
          <div :class="vipType == 0 ? 'content_2_1_1' : 'content_2_1_2'" @click="changeVipType(0)">普通会员</div>
          <div :class="vipType == 1 ? 'content_2_1_1' : 'content_2_1_2'" @click="changeVipType(1)">超级会员</div>
          <div :class="vipType == 2 ? 'content_2_1_1' : 'content_2_1_2'" @click="changeVipType(2)">企业会员</div>
          <div class="content_2_1_3" id="content_2_1_3" />
        </div>
        <div class="content_2_2">
          <div class="content_2_2_1" :style="`background-image:url('${vipInfo[vipType].background}');background-repeat:no-repeat;background-size:100%`">
            <div class="content_2_2_1_1">
              <img src="" class="content_2_2_1_1_1" />
              <div class="content_2_2_1_1_2">
                <div class="content_2_2_1_1_2_1">我是名字</div>
                <div class="content_2_2_1_1_2_2">时间</div>
              </div>
            </div>
          </div>
          <img src="http://39.106.208.234/pic/img_/fengx@2x.png" class="content_2_2_2" />
          <div class="content_2_2_3">
            <div class="content_2_2_3_1">{{ vipInfo[vipType].tag }}</div>
            <div class="content_2_2_3_2">
              <div class="content_2_2_3_2_1">{{ vipInfo[vipType].name }}</div>
              <div class="content_2_2_3_2_2">
                <div class="content_2_2_3_2_2_1">{{ vipInfo[vipType].price }}</div>
                <div class="content_2_2_3_2_2_2">元</div>
              </div>
            </div>
            <div class="content_2_2_3_3">{{ vipInfo[vipType].info }}</div>
          </div>
          <!-- <div class="content_2_2_4">选择支付方式</div> -->
          <div class="content_2_2_5">{{ vipInfo[vipType].btnText }}</div>
          <div class="content_2_2_6">
            <van-checkbox v-model="checked" checked-color="#d4a74f" icon-size=".704rem" />
            <div class="content_2_2_6_1">我已阅读开通VIP的</div>
            <div class="content_2_2_6_2">相关协议</div>
          </div>
        </div>
        <div class="content_2_3" />
        <img src="http://account.channel.bdhuoke.com/img/txt_shytq@2x.png" class="content_2_6" />
        <img src="http://account.channel.bdhuoke.com/img/part1-hy@2x.png" class="content_2_4" />
        <img src="http://account.channel.bdhuoke.com/img/part2-hy@2x.png" class="content_2_5" />
      </div>
      <div class="content_3" v-if="active == 2">
        <div class="content_3_1">
          <div class="content_3_1_1">
            <div class="content_3_1_1_1">未解锁</div>
            <div class="content_3_1_1_2">
              <div class="content_3_1_1_2_1">19,999</div>
              <div class="content_3_1_1_2_2">元/年</div>
            </div>
          </div>
          <img src="http://account.channel.bdhuoke.com/img/shenqingheika@2x.png" class="content_3_1_2" />
        </div>
        <div class="content_3_2">
          <div class="content_3_2_1">
            <input type="text" class="content_3_2_1_1" placeholder="请输入您的称呼" v-model="applyForBlackCardParams.name" />
            <input type="number" class="content_3_2_1_1" placeholder="请输入您的联系方式" v-model="applyForBlackCardParams.mobile" />
            <div class="content_3_2_1_2" @click="applyForBlackCard">提交申请</div>
          </div>
        </div>
        <img src="http://account.channel.bdhuoke.com/img/heikaquanyi@2x.png" class="content_3_3" />
        <img src="http://account.channel.bdhuoke.com/img/fuwuliuchen.png" class="content_3_4" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { applyForBlackCard } from '../../utils/api';
import { BUY_CONST, VIP_INFO } from '../../utils/const';
export default {
  data() {
    return {
      // TODO tab名称
      active: '',
      // TODO 购买信息数组
      buyInfo: [],
      // TODO 会员类型
      vipType: 1,
      // TODO 会员信息
      vipInfo: [],
      // TODO 是否同意会员协议
      checked: false,
      // TODO 黑卡申请参数
      applyForBlackCardParams: { mobile: '', name: '' },
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
      this.vipInfo = VIP_INFO;
    },
    // ? 切换会员类型
    changeVipType(type) {
      this.vipType = type;
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
    // ? 黑卡申请
    applyForBlackCard() {
      applyForBlackCard(this.applyForBlackCardParams).then(res => {
        if (res.code != 1) {
          Toast.fail(res.msg);
          return;
        }
        Toast.success('申请成功');
      });
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
