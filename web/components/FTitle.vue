<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  display: table-cell;
  height: 32px;
  line-height: 1;
  vertical-align: bottom;
  position: relative;
  font-weight: 600;
  font-size: 20px;
  padding-left: 16px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    height: 100%;
    background-color: $c-primary;
  }
}
</style>
