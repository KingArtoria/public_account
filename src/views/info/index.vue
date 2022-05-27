<template>
  <div style="background: #a3d2ff">
    <div class="content">
      <div class="content_1">{{ info.info }}</div>
      <div class="content_2">{{ info.settcycle_id }}</div>
      <img :src="info.pic" class="content_3" />
    </div>
  </div>
</template>

<script>
import { getInfo } from '../../utils/api';
export default {
  data() {
    return {
      info: {},
    };
  },
  methods: {
    // 查看资源详情
    getInfo() {
      getInfo({ id: this.$route.query.id }).then(res => {
        this.info = res.data;
      });
    },
  },
  mounted() {
    document.title = '项目详情';
    // 查看资源详情
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
