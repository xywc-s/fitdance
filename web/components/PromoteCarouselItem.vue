<template>
  <li class="item" :style="styles">
    <img :src="value" />
    <div
      :class="['text color-6 px-2', position === length ? 'font-14 active' : 'font-10' ]"
    >儿童缎面刺绣练功软底鞋</div>
  </li>
</template>

<script>
export default {
  props: {
    idx: {
      required: true,
      type: Number
    },
    length: {
      required: true,
      type: Number
    },
    position: {
      required: true,
      type: Number
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  },
  computed: {
    styles() {
      let scale = 1, zIndex = 1, opacity = 1, transX = this.position * 196, transY = 0;
      if (this.position < this.length - 3) zIndex = 10
      if (this.position > this.length + 3) zIndex = 2
      switch (this.position) {
        case this.length - 3:
          transX = (this.position + 0.25) * 196
          zIndex = 9
          break
        case this.length - 2:
          transX = (this.position - 0.2) * 196
          zIndex = 8
          break
        case this.length - 1:
          transX = (this.position - 0.7) * 196
          zIndex = 7
          break
        case this.length:
          scale = 1.25
          zIndex = 6
          transX = (this.position - 1.9) * 196
          transY = -10
          break;
        case this.length + 1:
          transX = (this.position - 0.3) * 196
          zIndex = 5
          break
        case this.length + 2:
          transX = (this.position - 0.75) * 196
          zIndex = 4
          break;
        case this.length + 3:
          transX = (this.position - 1.25) * 196
          zIndex = 3
          break;
        default:
          opacity = 0
          break;
      }
      return {
        width: '196px',
        height: '196px',
        zIndex: zIndex,
        opacity: opacity,
        transform: [`scale(${scale})`, `translateX(${transX}px)`, `translateY(${transY}px)`].join(' '),
        transformOrigin: 'bottom left'
      }
    }

  },
  watch: {
    position(val, old_val) {
      console.log(val, old_val);
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: inline-block;
  position: absolute;
  left: 0;
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    line-height: 30px;
    transition: all 0.1s ease-in;
    &.active {
      background-color: rgba($color: #fff, $alpha: 0.5);
      color: $c-primary;
      height: 40px;
    }
  }
}
</style>
