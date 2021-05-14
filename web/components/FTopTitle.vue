<template>
  <div class="box mx-auto">
    <div class="text-center">
      <span class="main-title px-4">
        <slot name="title">{{title}}</slot>
      </span>
    </div>
    <span class="sub-title text-uppercase text--disabled">
      <slot name="sub-title">{{subTitle}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['title', 'subTitle']
}
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  position: relative;
  border: $border-wrap;
  .main-title {
    display: inline-block;
    background-color: white;
    position: relative;
    top: -1.7rem;
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  .sub-title {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 5px;
    letter-spacing: 2px;
  }
}
</style>
