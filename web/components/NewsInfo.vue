<template>
  <!-- <v-row no-gutters>
    <v-col
      v-for="({title, subTitle, date},index) in news"
      :key="index"
      :cols="6"
      :offset="index%2 === 1? 6: 0"
    >
      <div :class="['d-flex', 'justify-end', 'px-8', {'flex-row-reverse': index % 2 === 1}]">
        <div :class="[{'text-right': index%2 === 0},`p${index % 2 === 0 ? 'r' : 'l'}-6`]">
          <div class="color-3 font-weight-bold">{{title}}</div>
          <div class="font-10 color-6">{{subTitle}}</div>
        </div>
        <div>
          <div
            class="color-9"
            style="font-size:35px; line-height:1"
          >{{monthFormat(date)}}-{{dayFormat(date)}}</div>
          <div class="font-14 year">{{new Date(date).getFullYear()}}</div>
        </div>
      </div>
    </v-col>
  </v-row>-->
  <v-timeline reverse align-top>
    <v-timeline-item
      v-for="({title, subTitle, date},index) in news"
      :key="index"
      small
      :color="index ? '': '#d33266'"
    >
      <div :class="['d-flex', 'justify-end',  {'flex-row-reverse': index % 2 === 1}]">
        <div :class="[{'text-right': index%2 === 0},`p${index % 2 === 0 ? 'r' : 'l'}-6`]">
          <div class="color-3 font-weight-bold">{{title}}</div>
          <div class="d-inline-block font-10 color-6 text-truncate sub-title">{{subTitle}}</div>
        </div>
        <div>
          <div
            class="color-9"
            style="font-size:35px; line-height:1"
          >{{monthFormat(date)}}-{{dayFormat(date)}}</div>
          <div class="font-14 year">{{new Date(date).getFullYear()}}</div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      news: [{
        title: '舞蹈服装设计的几种主要风格',
        subTitle: '舞蹈服装设计追求在舞蹈形式和内容中体现的价值取向和艺术特征发动机快速反击的深刻理解短时间楼上看风景的是可就是独领风骚类法术抵抗...',
        date: '2021-05-15'
      }, {
        title: '舞蹈服装设计的几种主要风格',
        subTitle: '舞蹈服装设计追求在舞蹈形式和内容中体现的价值取向和艺术特征...',
        date: '2021-04-13'
      }, {
        title: '舞蹈服装设计的几种主要风格',
        subTitle: '舞蹈服装设计追求在舞蹈形式和内容中体现的价值取向和艺术特征...',
        date: '2021-03-11'
      }, {
        title: '舞蹈服装设计的几种主要风格',
        subTitle: '舞蹈服装设计追求在舞蹈形式和内容中体现的价值取向和艺术特征...',
        date: '2021-02-07'
      }]
    }
  },
  methods: {
    monthFormat(date) {
      const month = new Date(date).getMonth() + 1
      if (month < 10) return `0${month}`
      return month
    },
    dayFormat(date) {
      const day = new Date(date).getDate()
      if (day < 10) return `0${day}`
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
.year {
  color: #cfcfcf;
}
.sub-title {
  width: 350px;
}
</style>
