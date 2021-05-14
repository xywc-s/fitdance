<template>
  <div style="width:100%;max-width:100%">
    <section class="top">
      <div class="container-fuild d-flex justify-space-between items-center color-primary my-1">
        <div class="d-flex align-center">
          <img src="../static/电话.png" class="mr-2" />
          <span class="line-height-1">在线咨询：</span>
          <span class="line-height-1" style="font-size: 1.125rem">{{tel}}</span>
        </div>
        <div class="d-flex align-center right-box">
          <span style="font-size: 1.125rem; line-height: 1">芭蕾裙 舞蹈服定制服务</span>
          <input class="px-2 ml-6" placeholder="在此商店中搜索" />
          <span class="search-icon"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['tel'])
  }
}
</script>

<style lang="scss" scoped>
.top {
  border-bottom: 1px solid #eaeaea;
  max-width: 100%;
}
input {
  position: relative;
  display: block;
  border: 1px solid #eaeaea;
  font-size: 0.75rem;
  height: 21px;
  margin-right: 21px;

  &:focus-visible {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #ebe9e9;
  }
}
.right-box {
  position: relative;
  .search-icon {
    position: absolute;
    display: inline-block;
    right: 0;

    width: 21px;
    height: 21px;
    background-image: url('../static/搜索.png');
  }
}
</style>
