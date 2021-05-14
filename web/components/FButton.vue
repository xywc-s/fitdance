<template>
  <div class="button text-left">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.button {
  font-size: 0.75rem;
  display: inline-block;
  background-color: $c-primary;
  color: white;
  padding: 8px 60px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(210, 43, 97, 0.3) 0 0 5px 1px;
  }
}
</style>
