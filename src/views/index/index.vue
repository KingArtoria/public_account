<template>
  <div>
    <div class="content">
      <div class="content_1">
        <div class="content_1_1">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swipe" :key="index">
              <img :src="item" class="content_1_1_1" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="content_1_2">
          <van-grid :column-num="5" :border="false">
            <van-grid-item v-for="(item, index) in grid1" :key="index">
              <div class="content_1_2_1" @click="goItemList(item)">
                <van-image :src="item.img" />
                <div class="content_1_2_1_1">{{ item.title }}</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <div class="content_1_3">
          <van-sticky>
            <van-tabs v-model="current" color="#1F73F1" background="#f6f6f6" @click="onChangeTab">
              <van-tab :title="item" v-for="(item, index) in tabs" :key="index" />
            </van-tabs>
          </van-sticky>
        </div>
        <div class="content_1_4">
          <ResourceDocking :item="item" v-for="(item, index) in indexData" :key="index" />
        </div>
      </div>
      <div class="content_2" v-if="loading">
        <van-loading size=".768rem" color="#0094ff" vertical>加载中...</van-loading>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceDocking from '../../components/resource_docking/index.vue';
import { CAROUSEL_CONST, GRID_CONST, TAB_CONST } from '../../utils/const';
import { formatTime } from '../../utils/index';
import { getResponses } from '../../utils/api';
export default {
  data() {
    return {
      // TODO 轮播图数据
      swipe: [],
      // TODO 宫格1数据
      grid1: [],
      // TODO 当前选中的标签
      current: 0,
      // TODO 标签
      tabs: [],
      // TODO 首页推荐参数
      recommendParams: { page: 1, type: 1 },
      // TODO 首页数据
      indexData: [],
      // TODO 分页加载
      loading: false,
      // TODO 当前路由
      currentRoute: '',
    };
  },
  methods: {
    // ? 初始化参数
    initParams() {
      this.swipe = CAROUSEL_CONST;
      this.grid1 = GRID_CONST;
      this.tabs = TAB_CONST;
      this.recommendParams.type = this.current + 1;
      this.currentRoute = this.$route.path;
    },
    // ? 资源对接查询
    getResponses() {
      this.loading = true;
      getResponses(this.recommendParams).then(res => {
        res.data.forEach(item => {
          item.addtime = formatTime(item.addtime, 'MM-dd hh:mm');
          item.type_name = TAB_CONST[item.type - 1];
          this.indexData.push(item);
        });
        this.loading = false;
      });
    },
    // ? 监听滚动到底部
    onScrollBottom() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        if (!this.loading) {
          this.recommendParams.page++;
          this.getResponses();
        }
      }
    },
    // ? 切换tabs
    onChangeTab() {
      this.recommendParams.type = this.current + 1;
      this.recommendParams.page = 1;
      this.indexData = [];
      this.getResponses();
    },
    goItemList(item) {
      this.$router.push(`/item?type=${item.type}`);
    },
  },
  mounted() {
    document.title = '火客';
    // ? 初始化参数
    this.initParams();
    // ? 资源对接查询
    this.getResponses();
    // ? 注册监听滚动
    window.addEventListener('scroll', this.onScrollBottom);
  },
  destroyed() {
    // ? 销毁监听滚动
    window.removeEventListener('scroll', this.onScrollBottom);
  },
  components: { ResourceDocking },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
