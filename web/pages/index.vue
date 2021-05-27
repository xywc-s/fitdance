<template>
  <section id="homepage">
    <banner></banner>
    <category class="my-16"></category>
    <section class="container-fuild">
      <products></products>
      <section class="products-relation">
        <div class="d-flex bgBar">
          <div class="wrap flex-shrink-1 left-inner pr-2 text-right">相关产品</div>
          <div class="wrap flex-grow-1 center"></div>
          <div class="wrap flex-shrink-1 right-inner pl-2 text-left">相关产品</div>
        </div>
        <div class="d-flex justify-space-between mx-auto category">
          <div class="item" v-for="(item, index) in products_category" :key="index">
            <img class="d-block" :src="category_images[index]" />
            <div class="text-center py-2">{{item}}</div>
          </div>
        </div>
      </section>
    </section>
    <section id="culture" class="container-fuild">
      <f-top-title class="mt-16" title="企业文化" sub-title="corporate culture"></f-top-title>
      <div class="d-flex mt-8">
        <img src="../static/home/企业文化-图片01.png" />
        <div class="right-box flex-grow-1 px-10 py-12">
          <culture></culture>
          <img style="max-width:100%" src="../static/home/企业文化-图片02.png" />
        </div>
      </div>
    </section>
    <factory></factory>
    <material class="my-16"></material>
    <design class="my-16"></design>
    <section id="process" class="container-fuild">
      <f-top-title class="mt-16" title="定制流程" sub-title="customization process"></f-top-title>
      <process class="my-16"></process>
    </section>
    <case class="my-16"></case>
  </section>
</template>

<script>
const category_images = [
  require('../static/home/披肩外套.png'),
  require('../static/home/舞蹈鞋.png'),
  require('../static/home/舞蹈袜.png'),
  require('../static/home/舞蹈配饰.png')
]
export default {
  data() {
    return {
      products_category: ['披肩外套', '舞蹈鞋', '舞蹈袜', '舞蹈配饰'],
      category_images
    }
  }
}
</script>

<style lang="scss" scoped>
.products-relation {
  position: relative;
  z-index: 1;
  .bgBar {
    position: relative;
    top: 93px;
    z-index: -1;
    margin: 0 85px;
    .center {
      background: $c-bg-gray;
    }
  }
  .category {
    width: 800px;
    .item {
      background-color: $c-bg-gray;
      padding: 1px;
      &:hover {
        cursor: pointer;
        color: white;
        background-color: $c-primary;
      }
    }
  }
}

#culture {
  .right-box {
    position: relative;
    background-color: $c-bg-gray;
    img {
      position: absolute;
      right: 8px;
      bottom: 8px;
    }
  }
}

//通过%placeholder定义一个伪类制作三角必要的样式

%content {
  content: '';
  display: block;
  width: 0;
  height: 0;
}

//结合三者不同特点，对`@mixin triangle`定义不同的参数

//1、Bourbon具有边角三角(左上、左下、右上、右下)，新增加四不同的方向: up,right,down,left,up-right,up-left,down-left,down-right。参考网址http://bourbon.io/docs/#triangle

//2、增加三角是否为透明三角$transparent，参考网址：http://www.miguelmota.com/blog/sass-triangles/

//3、增加定位三角为内嵌还是外凸，默认为外凸。$inner

//4、直接去掉截取三角另一边宽度。

//Triangle需要传的参数为$size,$color,$bgColor,$direction,$transparent,$inner

@mixin triangle(
  $size: 36px,
  $color: #000,
  $bgColor: #111,
  $direction: up,
  $inner: false,
  $transparent: false
) {
  //@extend %content
  @extend %content;
  position: absolute;
  //判断三角形状

  @if ($direction == right) or ($direction == left) {
    border: ($size / 2) solid transparent;

    //三角朝右
    @if $direction == right {
      border-color: transparent $bgColor transparent transparent;
      border-left-width: 0;
      right: 0;
    }

    //三角朝左
    @else if $direction == left {
      border-color: transparent transparent transparent $bgColor;
      border-right-width: 0;
      left: 0;
    }
  }
}

//调用
$color: #fff;
$borderColor: #ded;
$unit: 36px;
body {
  background: white;
}
.wrap {
  display: inline-block;
  background: $c-primary;
  width: 116px;
  height: $unit;
  line-height: $unit;
  color: $color;
  text-align: center;
  position: relative;
}

.right-inner {
  &:before {
    @include triangle($unit, $c-primary, white, right, true, false);
  }
}

.left-inner {
  &:before {
    @include triangle($unit, $c-primary, white, left, true, false);
  }
}
</style>

