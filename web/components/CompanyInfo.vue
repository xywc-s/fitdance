<template>
  <div>
    <div :class="[mainTitle?mainTitle:'text-subtitle-1', 'mb-3']">斐丹丝服饰（湖北）有限公司</div>
    <div :class="[subTitle ?subTitle: 'text-caption text--disabled', 'd-flex','ml-3']">
      <div>
        <div class="mb-1">电话：0717-3222718 / {{tel}}</div>
        <div class="mb-1">邮箱：wdf.88@outlook.com</div>
        <div class="mb-1">网址：www.fitdance.cn</div>
        <div class="mb-1">地址：湖北省当阳市玉阳办事处南正街70号</div>
      </div>
      <div v-if="showSubContact" class="ml-12">
        <div class="mb-1">微信：{{tel}}</div>
        <div class="mb-1">QQ：wdf.88@outlook.com</div>
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
