<template>
  <section id="culture" class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>
    <div class="d-flex mt-8">
      <img src="../static/home/企业文化-图片01.png" />
      <div class="right-box flex-grow-1 px-10 py-12 d-flex flex-column justify-space-between">
        <div v-for="(item,index) in cultures" :key="index">
          <div class="icon">
            <span class="keyword">{{item.keyword}}/</span>
            <span class="text-caption text-uppercase text--secondary">{{item.keyword_en}}</span>
          </div>
          <div class="text-subtitle-2 text--secondary">{{item.description}}</div>
        </div>
        <img style="max-width:100%" src="../static/home/企业文化-图片02.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `企业文化`,
      subtitle: 'corporate culture',
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
#culture {
  .right-box {
    position: relative;
    background-color: $c-bg-gray;
    img {
      position: absolute;
      right: 8px;
      bottom: 8px;
    }
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
  }
}
</style>
