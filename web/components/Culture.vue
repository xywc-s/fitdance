<template>
  <section id="culture" class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
    <title-com :title="title" :subtitle="subtitle"></title-com>
    <v-row class="d-flex flex-column">
      <v-col
        v-for="item in cultures"
        :key="item.keyword"
        class="columns d-flex align-center mt-8 pa-0"
      >
        <div class="keyword flex-grow-0">
          <div v-text="item.keyword" class="text-h4 text-center"></div>
        </div>
        <div class="description flex-grow-1">
          <div v-text="item.description" class="text-h5"></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `企 / 业 / 文 / 化`,
      subtitle: 'corporate culture',
      cultures: [{
        keyword: '愿景',
        description: '服务一千万家舞蹈培训机构和学校，让10亿儿童穿上舞蹈服'
      }, {
        keyword: '使命',
        description: '让陪伴、爱改变世界，搭建员工成长成功平台'
      }, {
        keyword: '价值观',
        description: '诚信为本、诚实做人、精心做事'
      }, {
        keyword: '作风',
        description: '认真、快、坚守承诺、绝不找借口'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
#culture {
  .columns {
    border-radius: 5rem;
    background-color: lightgray;
    .keyword {
      flex-basis: 20%;
      div {
        background-color: green;
        border-top-left-radius: 5rem;
        border-bottom-left-radius: 5rem;
        padding: 6% 24px;
      }
    }
    .description {
      div {
        width: 100%;
        margin-left: 4%;
      }
    }
  }
}
</style>
