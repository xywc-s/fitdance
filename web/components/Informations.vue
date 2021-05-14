<template>
  <v-row class="my-4">
    <v-col v-for="({title,date}, index) in datas" :key="index" class="px-10 py-1" cols="6">
      <div class="d-flex align-center informate">
        <span class="round mr-2">
          <span></span>
        </span>
        <span class="content text-truncate">{{title}}</span>
        <div class="date ml-auto pl-6">{{date}}</div>
      </div>
    </v-col>

    <v-col cols="12" class="px-10">
      <span class="button">查看更多</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        },
        {
          title: '舞蹈演出服装定制舞蹈演出服装定制舞蹈演出服装定制舞蹈演出服装定制',
          date: '2021-05-11'
        },
        {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        },
        {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        },
        {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        }, {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        }, {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        }, {
          title: '舞蹈演出服装定制',
          date: '2021-05-11'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.informate {
  font-size: 1.1rem;
  .round {
    min-width: 18px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #aaa;
    opacity: 0.8;
    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #aaa;
    }
  }
  .content {
    color: #888;
  }
  .date {
    min-width: 130px;
    opacity: 0.5;
    font-size: 17px;
    text-align: right;
  }
  &:hover {
    cursor: pointer;
    color: $c-primary;
    .round {
      border: 1px solid $c-primary;
      span {
        background-color: $c-primary;
      }
    }
    .content {
      color: $c-primary;
    }
  }
}

.button {
  float: right;
  font-size: 0.75rem;
  display: block;
  color: white;
  background-color: #aaa;
  padding: 6px 24px;
  border-radius: 1px;
  &:hover {
    cursor: pointer;
    background-color: $c-primary;
  }
}
</style>
