<template>
  <div class="d-flex flex-column justify-space-between" style="height:100%">
    <div v-for="(item,index) in cultures" :key="index">
      <div :class="{'icon': icon}">
        <span class="keyword">{{item.keyword}}/</span>
        <span class="text-caption text-uppercase text--secondary">{{item.keyword_en}}</span>
      </div>
      <div class="text-subtitle-2 text--secondary">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cultures: [{
        keyword: '企业愿景',
        keyword_en: 'corporate vision',
        description: '服务一千万家舞蹈培训机构和学校，让10亿儿童穿上舞蹈服'
      }, {
        keyword: '企业使命',
        keyword_en: 'corporate mission',
        description: '让陪伴、爱改变世界，搭建员工成长成功平台'
      }, {
        keyword: '企业作风',
        keyword_en: 'corporate values',
        description: '认真、快、坚守承诺、绝不找借口'
      }, {
        keyword: '企业价值观',
        keyword_en: 'corporate sytle',
        description: '诚信为本、诚实做人、精心做事'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.keyword {
  font-size: 18px;
  display: inline-block;
  letter-spacing: 0.1rem;
}
.icon {
  position: relative;
  &::before {
    position: absolute;
    content: '';
    bottom: 6px;
    left: -14px;
    width: 6px;
    height: 14px;
    background-color: $c-primary;
  }
}
</style>
