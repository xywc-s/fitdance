<template>
  <section id="news-center" class="text-center">
    <img class="max-w-100" :src="banner" />
    <div class="container-fuild text-left">
      <FTitle class="mt-16 mb-10">问题解答</FTitle>
      <div class="d-flex align-center">
        <div class="d-flex flex-column mr-12">
          <div v-for="({q,a},index) in qa" :key="index" class="pl-14 text-justify qa">
            <div class="relative">
              <span class="icon"></span>
              <span class="font-weight-bold color-3">{{q}}</span>
            </div>
            <div class="color-6">{{a}}</div>
          </div>
        </div>
        <img :src="faq" />
      </div>
      <f-title class="mt-16">资讯推荐</f-title>
      <div class="divider"></div>
      <informations></informations>
      <Products class="my-10" title="相关产品"></Products>
    </div>
  </section>
</template>

<script>
const banner = require('../static/news/banner.png')
const faq = require('../static/news/问答配图芭蕾裙.png')
export default {
  data() {
    return {
      banner,
      faq,
      qa: [{
        q: '1.您是制造商还是贸易公司？',
        a: '我们是儿童和成人练功服、舞蹈服的专业制造商。我们拥有一支专业、完善的团队，在设计、制造和市场营销方面拥有超过21年的经验。'
      }, {
        q: '2.我能先收到样品确认吗？样品费多少钱？',
        a: '可提供样品。样品费将按批发价的两倍收取，但如果您与我们合作签下订单，我们将退还多余的样品费用。'
      }, {
        q: '3.我如何订购？',
        a: '您可以向我们发送有关您喜欢的产品的查询结果或样式，我们将向您发送产品的详细信息。另外，我们提供产品的详细尺寸表，您可以从尺寸表中选择合适的尺寸。如果您对尺寸有任何疑问，可以咨询客服或给我们留言，告诉我们年龄，身高和体重等相关信息，我们可以为您提供专业建议。'
      }, {
        q: '4.我可以在衣服上贴上自己的标签/logo吗？可以选择颜色吗？',
        a: '是的。欢迎定制。如果您有自己的设计，请与我们联系以获取更多详细信息，我们可以为您制作样品。我们会向您提供可供选择的多种颜色。'
      }, {
        q: '5.你们的售后服务如何？',
        a: '1）所有产品在包装前都会经过严格的质量检查。2）产品在运输前会包装好。3）如果有任何不满意之处，您可以与我们联系以获得解决方案。'
      }, {
        q: '6.我们对孩子的舞蹈服提供什么样的保修或保证？',
        a: '我们销售高质量和可靠的产品。发货前，我们的质量保证人员会为客户详细检查每件衣服，以确保产品质量，绝不会发送损坏或有缺陷的衣服。'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  margin-top: 8px;
  width: 500px;
  border-top: 1px solid #333;
}
.icon {
  display: inline-block;
  position: absolute;
  left: -40px;
  height: 24px;
  width: 24px;
  background-image: url('../static/news/问答符号.png');
}
.qa {
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
