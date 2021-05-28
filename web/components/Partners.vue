<template>
  <div class="container-fuild">
    <FTitle>合作伙伴</FTitle>
    <div class="text-center mt-9 mb-11">
      <img v-for="(partner, id) in partners" :key="id" :src="partner" class="partner" />
    </div>
  </div>
</template>

<script>
const partners = [
  require('../static/partners/合作伙伴01.png'),
  require('../static/partners/合作伙伴02.png'),
  require('../static/partners/合作伙伴03.png'),
  require('../static/partners/合作伙伴04.png'),
  require('../static/partners/合作伙伴05.png'),
  require('../static/partners/合作伙伴06.png')
]
export default {
  data() {
    return {
      partners
    }
  }
}
</script>

<style lang="scss" scoped>
.partner {
  &:not(:last-child) {
    margin-right: 50px;
  }
}
</style>
