<template>
  <div class="resource_docking" @click="goResourceDetail(item.id)">
    <div class="resource_docking_1">
      <img :src="`https://admin.bdhuoke.com${item.head}`" class="resource_docking_1_1" />
      <div class="resource_docking_1_2">{{ item.nick_name }}</div>
      <div class="resource_docking_1_3" />
      <div class="resource_docking_1_4">{{ item.position }}</div>
    </div>
    <div class="resource_docking_2">{{ item.title }}</div>
    <div class="resource_docking_3">
      <span style="margin-right: 0.96rem">{{ item.addtime }}</span>
      <span>{{ item.company }}</span>
    </div>
    <div class="resource_docking_4">
      <div class="resource_docking_4_1" v-if="item.type == 1 || item.type == 2 || item.type == 11">
        <div class="resource_docking_4_1_1">{{ item.settcycle_id }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">结算方式：{{ item.settmod_id }}</div>
        <div class="resource_docking_4_1_1">{{ item.promotion }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 3">
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">{{ item.source }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 4">
        <div class="resource_docking_4_1_1">{{ item.settcycle_id }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">{{ item.source }}</div>
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 5">
        <div class="resource_docking_4_1_1">提供：{{ item.source }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">需求{{ item.comprehensive }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 6">
        <div class="resource_docking_4_1_1">提供：{{ item.source }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">需求{{ item.comprehensive }}</div>
        <div class="resource_docking_4_1_1">用户量：{{ item.user_number }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 7">
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">{{ item.comprehensive }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 8">
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">曝光：{{ item.user_number }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 9">
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
        <div class="resource_docking_4_1_1" style="margin-left: 0.7rem; margin-right: 0.7rem">曝光：{{ item.comprehensive }}</div>
      </div>
      <div class="resource_docking_4_1" v-if="item.type == 10">
        <div class="resource_docking_4_1_1">{{ item.product }}</div>
      </div>
      <div class="resource_docking_4_2">{{ item.type_name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: {} },
  },
  methods: {
    // ? 前往资源详情
    goResourceDetail(id) {
      this.$router.push(`/info?fid=${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
