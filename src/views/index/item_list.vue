<template>
  <div style="padding-bottom: 4.1rem">
    <ResourceDocking :item="item" v-for="(item, index) in indexData" :key="index" />
  </div>
</template>

<script>
import ResourceDocking from '../../components/resource_docking';
import { formatTime } from '../../utils';
import { getResponses } from '../../utils/api';
import { TAB_CONST } from '../../utils/const';
export default {
  data() {
    return {
      // 资源对接参数
      params: {
        page: 1,
      },
      // 展示数据
      indexData: [],
    };
  },
  methods: {
    // 资源对接
    getResponses() {
      getResponses(this.params).then(res => {
        res.data.forEach(item => {
          item.addtime = formatTime(item.addtime, 'MM-dd hh:mm');
          item.type_name = TAB_CONST[item.type - 1];
          this.indexData.push(item);
        });
      });
    },
    // 初始化参数
    initParams() {
      this.params.type = this.$route.query.type;
    },
    // ? 监听滚动到底部
    onScrollBottom() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        if (!this.loading) {
          this.params.page++;
          this.getResponses();
        }
      }
    },
  },
  mounted() {
    // 初始化参数
    this.initParams();
    // 资源对接
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
@import './item_list.scss';
</style>
