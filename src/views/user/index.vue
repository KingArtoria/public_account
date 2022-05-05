<template>
  <div class="page">
    <div class="info app-img">
      <div class="top">
        <div class="top-left">
          <img :src="userPhoto" alt="" class="img" />
        </div>
        <div class="top-right">
          <div class="title">
            <span class="username">{{ username }}</span>
            <div class="level-icon"></div>
          </div>
          <div class="desc">
            <span>{{ deptName }}</span>
            <span class="posi">{{ posiName }}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="bottom-left">我的邀请码：123456</span>
        <div class="btn app-flex-center">编辑资料</div>
      </div>
    </div>
    <!-- 公众号剩余发布次数 -->
    <div class="count-wrap card">
      <div class="count">{{ surplusCount }}</div>
      <p class="tip">公众号剩余发布次数</p>
    </div>
    <!-- 菜单 -->
    <div class="menu card">
      <ul>
        <li v-for="item in menus" :key="item.path" class="menu-item" @click="nav(item.path)">
          <div class="icon app-img" :style="{'background-image': `url(${item.icon})`}"></div>
          <span class="title">{{ item.title }}</span>
          <div class="arrow app-img"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户头像地址
      userPhoto: "http://account.channel.bdhuoke.com/img/libao@2x.png",
      // 用户姓名
      username: "张三",
      // 用户部门
      deptName: "BD 火客",
      // 用户职位
      posiName: "产品经理",
      // 剩余发布次数
      surplusCount: 5,
      // 菜单
      menus: [
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_bdzh@2x.png',
          title: '绑定火客账号',
          path: '/register'
        },
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_lxkf@2x.png',
          title: '联系客服',
          path: 'contact'
        },
        {
          icon: 'http://account.channel.bdhuoke.com/img/user_gywm@2x.png',
          title: '关于我们',
          path: 'about'
        },
      ]
    };
  },
  methods: {
    // 路由跳转
    nav(path) {
      this.$router.push(path);
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
