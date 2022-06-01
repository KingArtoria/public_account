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
            <div class="content_1_1_2_2" @click="goodsorderadd(item)">购买</div>
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
          <div class="content_2_2_1"
            :style="`background-image:url('${vipInfo[vipType].background}');background-repeat:no-repeat;background-size:100%`">
            <div class="content_2_2_1_1">
              <img :src="userInfo.head" class="content_2_2_1_1_1" v-if="userInfo.head" />
              <div class="content_2_2_1_1_2">
                <div class="content_2_2_1_1_2_1" :style="`color:${vipInfo[vipType].color}`">{{ userInfo.nick_name }}
                </div>
                <div class="content_2_2_1_1_2_2" :style="`color:${vipInfo[vipType].color}`">{{ userInfo.vip_endtime }}
                </div>
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
          <div class="content_2_2_5" @click="goodsorderadd(vipInfo[vipType])">{{ vipInfo[vipType].btnText }}</div>
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
            <input type="number" class="content_3_2_1_1" placeholder="请输入您的联系方式"
              v-model="applyForBlackCardParams.mobile" />
            <div class="content_3_2_1_2" @click="applyForBlackCard">提交申请</div>
          </div>
        </div>
        <img src="http://account.channel.bdhuoke.com/img/heikaquanyi@2x.png" class="content_3_3" />
        <img src="http://account.channel.bdhuoke.com/img/fuwuliuchen.png" class="content_3_4" />
      </div>
    </div>
    <van-overlay :show="show">
      <div class="wrapper" @click.stop>
        <div class="wrapper_1">
          <img src="http://account.channel.bdhuoke.com/img/bangdzh@2x.png" class="wrapper_1_1" />
          <img src="http://account.channel.bdhuoke.com/img/close@2x.png" class="wrapper_1_2" @click="show = false" />
          <div class="wrapper_1_3" @click="goBindAccount">去绑定</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { applyForBlackCard, getUserInfo, goodsorderadd, pay_gzh } from '../../utils/api';
import { BUY_CONST, VIP_INFO } from '../../utils/const';
import { formatTime } from '../../utils';
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
      checked: true,
      // TODO 黑卡申请参数
      applyForBlackCardParams: { mobile: '', name: '' },
      // TODO 创建订单参数
      createOrderParams: {},
      // TODO 微信支付参数
      wechatPayParams: {},
      // TODO 用户信息
      userInfo: {},
      // 展示遮罩
      show: false,
    };
  },
  methods: {
    // ? 前往绑定账号
    goBindAccount() {
      this.$router.push('/register');
    },
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
      this.createOrderParams.paytype = 'wxpay';
      this.createOrderParams.token = this.TOKEN;
      setTimeout(() => {
        if (!this.TOKEN) this.show = true;
      }, 1000);
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
    // ? 创建订单
    goodsorderadd(item) {
      this.createOrderParams.goods_id = item.id;
      goodsorderadd(this.createOrderParams).then(res => {
        this.wxpay(res.data);
      });
    },
    // ? 微信支付
    wxpay(data) {
      this.wechatPayParams.order_sn = data.sn;
      this.wechatPayParams.openid = this.OPEN_ID;
      pay_gzh(this.wechatPayParams).then(res => {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          {
            appId: res.appId,
            timeStamp: res.timeStamp,
            nonceStr: res.nonceStr,
            package: res.package,
            signType: res.signType,
            paySign: res.paySign,
          },
          res => {
            if (res.err_msg == 'get_brand_wcpay_request:ok') {
              this.$route.push('/success_vip');
            }
          },
        );
      });
    },
    // ? 获取用户信息
    getUserInfo() {
      getUserInfo({ token: this.TOKEN }).then(res => {
        res.head = 'https://admin.bdhuoke.com/' + res.head;
        res.vip_endtime = res.vip_endtime == 0 ? '暂未开通' : res.vip_endtime;
        if (res.vip_endtime > 0) {
          res.vip_endtime = `到期时间：${formatTime(res.vip_endtime * 1000, 'yyyy-MM-dd')}`;
        }
        this.userInfo = res;
        console.log(this.userInfo);
      });
    },
  },
  mounted() {
    document.title = '会员中心';
    // ? 初始化参数
    this.initParams();
    // ? 获取用户信息
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
