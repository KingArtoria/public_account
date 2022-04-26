<template>
  <div>
    <div class="content">
      <div class="content_1">
        <div class="content_1_1">{{ obtainInfo.title }}</div>
        <div class="content_1_2">{{ obtainInfo.addtime }}</div>
      </div>
      <div class="content_2">
        <img :src="`https://admin.bdhuoke.com${obtainInfo.head}`" class="content_2_1" />
        <div class="content_2_2">
          <div class="content_2_2_1">
            <div class="content_2_2_1_1">{{ obtainInfo.nick_name }}</div>
            <div class="content_2_2_1_2" />
            <div class="content_2_2_1_3">{{ obtainInfo.position }}</div>
          </div>
          <div class="content_2_2_2">{{ obtainInfo.company }}</div>
        </div>
      </div>
      <div class="content_3">
        <div class="content_3_1">
          <div class="content_3_1_1" />
          <div class="content_3_1_2">我能提供</div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 1 || obtainInfo.type == 2">
          <div class="content_3_2_1">结算方式：{{ obtainInfo.settmod_id }}</div>
          <div class="content_3_2_1">结算单价：{{ obtainInfo.price }}</div>
          <div class="content_3_2_1">结算周期：{{ obtainInfo.settcycle_id }}</div>
          <div class="content_3_2_1">推广方式：{{ obtainInfo.promotion }}</div>
          <div class="content_3_2_1">合作类型：{{ obtainInfo.cooptype_id }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="content_4">
        <div class="content_4_1">
          <div class="content_4_1_1">
            <div class="content_4_1_1_1" />
            <div class="content_4_1_1_2">联系方式</div>
          </div>
          <div class="content_4_1_2">联系方式点击可复制或拨打</div>
        </div>
        <div class="content_4_2" v-if="!obtainInfo.lock">
          <div class="content_4_2_1">点击查看联系方式</div>
        </div>
        <div class="content_4_3" v-else>
          <div class="content_4_3_1">
            <div class="content_4_3_1_1">
              <span class="content_4_3_1_1">电话：</span>
              <span class="content_4_3_1_2">{{ obtainInfo.contact }}</span>
            </div>
            <div class="content_4_3_1_1">
              <span class="content_4_3_1_1">微信：</span>
              <span class="content_4_3_1_2">{{ obtainInfo.wx }}</span>
            </div>
          </div>
          <div class="content_4_3_2">
            <div class="content_4_3_1_1">
              <span class="content_4_3_1_1">QQ：</span>
              <span class="content_4_3_1_2">{{ obtainInfo.qq }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content_5">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">资源详情</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.assessment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reGetObtainInfo } from '../../utils/api';
export default {
  data() {
    return {
      // TODO 资源详情参数
      obtainInfoParams: {},
      // TODO 资源详情
      obtainInfo: {},
    };
  },
  methods: {
    // ? 初始化参数
    initParams() {
      this.obtainInfoParams = { fid: this.$route.query.fid };
    },
    // ? 资源详情
    reGetObtainInfo() {
      reGetObtainInfo(this.obtainInfoParams).then(res => {
        // 字符串,分割成数组
        res.data[0].area = res.data[0].area.split(',');
        this.obtainInfo = res.data[0];
      });
    },
  },
  mounted() {
    // ? 初始化参数
    this.initParams();
    // ? 资源详情
    this.reGetObtainInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './info.scss';
</style>
