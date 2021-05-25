<template>
  <section>
    <div class="title">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  @extend .color-3;
  display: table-cell;
  height: 34px;
  line-height: 1;
  vertical-align: bottom;
  position: relative;
  font-weight: 600;
  font-size: 22px;
  padding-left: 16px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 7px;
    height: 100%;
    background-color: $c-primary;
  }
}
</style>
