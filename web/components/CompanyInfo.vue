<template>
  <div class="line-height-1">
    <div :class="[mainTitle?mainTitle:'text-subtitle-1', 'mb-6']">斐丹丝服饰（湖北）有限公司</div>
    <div :class="[subTitle ?subTitle: 'text-caption text--disabled', 'd-flex','ml-3']">
      <div style="line-height:30px">
        <div>电话：{{tel}}</div>
        <div>邮箱：info@fitdancetutu.com</div>
        <div>网址：www.fitdance.cn</div>
        <div>地址：湖北省当阳市玉阳办事处南正街70号</div>
      </div>
      <div v-if="showSubContact" class="ml-12" style="line-height:30px">
        <div>微信：{{tel}}</div>
        <div>QQ：717659371</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    showSubContact: {
      default: false,
      type: Boolean
    },
    mainTitle: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
  computed: {
    ...mapState(['tel'])
  }
}
</script>
