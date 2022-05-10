<template>
  <div class="page">
    <div v-if="isBind" class="info app-img">
      <div class="top">
        <div class="top-left">
          <img :src="userInfo.head" alt="" class="img" v-if="userInfo.head" />
        </div>
        <div class="top-right">
          <div class="title">
            <span class="username">{{ userInfo.nick_name }}</span>
            <div v-if="userInfo.is_vip === 1" class="level-icon"></div>
          </div>
          <div class="desc">
            <span>{{ userInfo.company }}</span>
            <span class="posi">{{ userInfo.position }}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="bottom-left" @click="copy">账号识别码：{{ userInfo.Invitation_code }}</span>
        <!-- <div classs="btn app-flex-center">编辑资料</div> -->
      </div>
    </div>
    <!-- 公众号剩余发布次数 -->
    <div v-if="isBind" class="count-wrap card">
      <div class="count">{{ surplusCount }}</div>
      <p class="tip">公众号剩余发布次数</p>
    </div>
    <!-- 菜单 -->
    <div class="menu card">
      <ul>
        <li v-for="item in menus" :key="item.path" class="menu-item" @click="nav(item.path)">
          <div class="icon app-img" :style="{ 'background-image': `url(${item.icon})` }"></div>
          <span class="title">{{ item.title }}</span>
          <div class="arrow app-img"></div>
        </li>
      </ul>
    </div>
    <van-overlay :show="showDialog" @click="showDialog = false">
      <div class="showDialog" @click.stop>
        <div class="showDialog_1">
          <div class="showDialog_1_1">客服电话：</div>
          <div class="showDialog_1_2">18511169119</div>
        </div>
        <div class="showDialog_1">
          <div class="showDialog_1_1">客服微信：</div>
          <div class="showDialog_1_2">XYLD01</div>
          <div class="showDialog_1_3">(点击复制)</div>
        </div>
        <img src="http://39.106.208.234/pic/img_/rwmsw.png" class="showDialog_2" />
        <div class="showDialog_3">(客服微信)</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { getUserInfo, getUserSendNum } from '../../utils/api';
import { copyToClip } from '../../utils/index';
export default {
  data() {
    return {
      // 剩余发布次数
      surplusCount: 'X',
      // 菜单
      menus: [
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_bdzh@2x.png',
          title: '绑定火客账号',
          path: '/register',
        },
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_lxkf@2x.png',
          title: '联系客服',
          path: 'contact',
        },
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_gywm@2x.png',
          title: '关于我们',
          path: 'about',
        },
      ],
      isBind: false, // 是否绑定账号
      userInfo: {},
      // TODO 客服对话框
      showDialog: false,
    };
  },
  methods: {
    // 路由跳转
    nav(path) {
      if (path === 'contact') this.showDialog = true;
      else if (path === 'about') window.location.href = 'http://kd.bdhuoke.com';
      else this.$router.push(path);
    },
    // 复制识别码到剪贴板
    copy() {
      copyToClip(this.userInfo.Invitation_code);
    },
  },
  mounted() {
    if (this.TOKEN) {
      // 根据token获取用户信息
      getUserInfo({ token: this.TOKEN }).then(res => {
        this.isBind = true;
        res.head = 'https://appv41.bdhuoke.com/' + res.head;
        this.userInfo = res;
      });
      getUserSendNum({ token: this.TOKEN }).then(res => {
        this.surplusCount = res.data;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
