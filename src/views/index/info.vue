<template>
  <div>
    <div class="content">
      <div class="content_1">
        <div class="content_1_1">{{ obtainInfo.title }}</div>
        <div class="content_1_2">{{ obtainInfo.addtime }}</div>
      </div>
      <div class="content_2">
        <img :src="`https://admin.bdhuoke.com${obtainInfo.head}`" class="content_2_1" v-if="obtainInfo.head" />
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
        <div class="content_3_2" v-if="obtainInfo.type == 1 || obtainInfo.type == 2 || obtainInfo.type == 11">
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
        <div class="content_3_2" v-if="obtainInfo.type == 3">
          <div class="content_3_2_1">产品类型：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">货源类型：{{ obtainInfo.source }}</div>
          <div class="content_3_2_1">客单价：{{ obtainInfo.price }}</div>
          <div class="content_3_2_1">产品名称：{{ obtainInfo.product_name }}</div>
          <div class="content_3_2_1">一件代发：{{ obtainInfo.issuing }}</div>
          <div class="content_3_2_1">相关资质：{{ obtainInfo.supplement }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 4">
          <div class="content_3_2_1">类型：{{ obtainInfo.source }}</div>
          <div class="content_3_2_1">产品类型：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">结算周期：{{ obtainInfo.settcycle_id }}</div>
          <div class="content_3_2_1">销货能力：{{ obtainInfo.assessment }}</div>
          <div class="content_3_2_1">合作模式：{{ obtainInfo.alliance }}</div>
          <div class="content_3_2_1">一件代发：{{ obtainInfo.issuing }}</div>
          <div class="content_3_2_1">其他补充：{{ obtainInfo.supplement }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 5">
          <div class="content_3_2_1">提供类型：{{ obtainInfo.source }}</div>
          <div class="content_3_2_1">需求类型：{{ obtainInfo.comprehensive }}</div>
          <div class="content_3_2_1">合作要求：{{ obtainInfo.assessment }}</div>
          <div class="content_3_2_1">其他补充：{{ obtainInfo.supplement }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 6">
          <div class="content_3_2_1">提供用户类型：{{ obtainInfo.source }}</div>
          <div class="content_3_2_1">需求用户类型：{{ obtainInfo.comprehensive }}</div>
          <div class="content_3_2_1">用户量：{{ obtainInfo.user_number }}</div>
          <div class="content_3_2_1">流量载体类型：{{ obtainInfo.product_advantage }}</div>
          <div class="content_3_2_1">可互换位置：{{ obtainInfo.introduce }}</div>
          <div class="content_3_2_1">其他补充：{{ obtainInfo.supplement }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 7">
          <div class="content_3_2_1">项目类型：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">加盟费：{{ obtainInfo.comprehensive }}</div>
          <div class="content_3_2_1">预计年利润：{{ obtainInfo.profits }}</div>
          <div class="content_3_2_1">项目名称：{{ obtainInfo.product_name }}</div>
          <div class="content_3_2_1">加盟扶持政策：{{ obtainInfo.introduce }}</div>
          <div class="content_3_2_1">其他要求：{{ obtainInfo.supplement }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 8">
          <div class="content_3_2_1">广告位场景：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">日曝光量：{{ obtainInfo.user_number }}</div>
          <div class="content_3_2_1">广告位数量：{{ obtainInfo.quantity }}</div>
          <div class="content_3_2_1">合作方式：{{ obtainInfo.info }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 9">
          <div class="content_3_2_1">场地类型：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">合作模式：{{ obtainInfo.comprehensive }}</div>
          <div class="content_3_2_1">线下场地数量：{{ obtainInfo.amount }}</div>
          <div class="content_3_2_1">场地所在区域：{{ obtainInfo.issuing }}</div>
          <div class="content_3_2_1">
            合作地区：
            <span v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</span>
          </div>
        </div>
        <div class="content_3_2" v-if="obtainInfo.type == 10">
          <div class="content_3_2_1">资源类型：{{ obtainInfo.product }}</div>
          <div class="content_3_2_1">合作模式：{{ obtainInfo.alliance }}</div>
          <div class="content_3_2_1">其他要求：{{ obtainInfo.supplement }}</div>
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
      <div class="content_5" v-if="obtainInfo.type == 1 || obtainInfo.type == 2 || obtainInfo.type == 11">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">资源详情</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.assessment }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 3">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">产品优势</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.product_advantage }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 4">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">渠道简介</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.introduce }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 4">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">产品要求</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.product_advantage }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 5">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">提供的资源</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.product_advantage }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 5">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">需求的资源</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.info }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 6">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">合作模式</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.alliance }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 6">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">合作要求</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.assessment }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 7">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">项目简介</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.product_advantage }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 7">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">加盟条件</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.alliance }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 8">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">广告位资源描述</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.assessment }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 8">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">合作要求</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.alliance }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 9">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">场地概况</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.supplement }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 9">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">需求资源</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.info }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 10">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">资源描述</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.product_advantage }}</div>
      </div>
      <div class="content_5" v-if="obtainInfo.type == 10">
        <div class="content_5_1">
          <div class="content_5_1_1" />
          <div class="content_5_1_2">合作要求</div>
        </div>
        <div class="content_5_2">{{ obtainInfo.assessment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContactInfo, reGetObtainInfo } from '../../utils/api';
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
        res.data[0].area = res.data[0].area.split(',');
        this.obtainInfo = res.data[0];
      });
    },
    // ? 查看手机号
    getContactInfo(){
      getContactInfo().then(res=>{
        
      })
    }
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
