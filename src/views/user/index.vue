<template>
  <div class="page">
    <div v-if="isBind" class="info app-img">
      <div class="top">
        <div class="top-left">
          <img :src="userInfo.head" alt="" class="img" />
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
        <span class="bottom-left">我的邀请码：{{ userInfo.Invitation_code }}</span>
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
        <li
          v-for="item in menus"
          :key="item.path"
          class="menu-item"
          @click="nav(item.path)"
        >
          <div
            class="icon app-img"
            :style="{ 'background-image': `url(${item.icon})` }"
          ></div>
          <span class="title">{{ item.title }}</span>
          <div class="arrow app-img"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "../../utils/api";
export default {
  data() {
    return {
      // 剩余发布次数
      surplusCount: 5,
      // 菜单
      menus: [
        {
          icon: "http://account.channel.bdhuoke.com/img/user_bdzh@2x.png",
          title: "绑定火客账号",
          path: "/register",
        },
        {
          icon: "http://account.channel.bdhuoke.com/img/user_lxkf@2x.png",
          title: "联系客服",
          path: "contact",
        },
        {
          icon: "http://account.channel.bdhuoke.com/img/user_gywm@2x.png",
          title: "关于我们",
          path: "about",
        },
      ],
      isBind: false, // 是否绑定账号
      userInfo: {},
    };
  },
  methods: {
    // 路由跳转
    nav(path) {
      this.$router.push(path);
    },
  },
  mounted() {
    if (this.TOKEN) {
      // 根据token获取用户信息
      getUserInfo({
        token: this.TOKEN
      }).then(res => {
        this.isBind = true;
        res.data.head = 'https://appv41.bdhuoke.com/' + res.data.head
        this.userInfo = res.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
