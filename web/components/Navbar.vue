<template>
  <section>
    <div class="container-fuild d-flex justify-space-between">
      <div class="d-flex justify-start py-1">
        <v-img width="100px" height="60" contain :src="logo" class="mr-4"></v-img>
        <v-img max-height="60" max-width="60" contain :src="qrcode"></v-img>
      </div>
      <ul class="d-flex">
        <template v-for="{title,path} in menus">
          <li
            :key="path"
            :class="{'active': path === $route.path, 'align-self-end': true}"
            @click="()=> { $router.push(path)}"
          >{{title}}</li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['menus', 'tel', 'logo', 'qrcode'])
  }
}
</script>

<style lang="scss" scoped>
$nav-border: 3px solid $c-primary;
li {
  position: relative;
  list-style: none;
  cursor: pointer;
  padding: 12px 20px;
  font-size: 1.1875rem;
  &:last-child {
    padding-right: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: $nav-border;
    transition: 0.2s all linear;
  }
  &:hover {
    color: $c-primary;
    &::before {
      left: 0;
      width: 100%;
    }
    ~ li::before {
      left: 0;
    }
  }
  &.active {
    color: $c-primary;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: $nav-border;
    }
  }
}
</style>
