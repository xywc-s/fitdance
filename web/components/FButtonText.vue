<template>
  <span class="d-inline-block pb-1 btn">
    <slot></slot>
    <span class="ml-2">》</span>
  </span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  cursor: pointer;
}
</style>
