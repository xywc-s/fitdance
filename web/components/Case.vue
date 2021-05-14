<template>
  <section id="case" class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>
    <v-row no-gutters class="mt-8">
      <v-col cols="5" class="d-flex flex-column">
        <v-row no-gutters class="d-flex flex-column">
          <v-col class="pa-1">
            <v-img :src="cases[2]" :aspect-ratio="5/3">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col class="pa-1 d-flex flex-column justify-center">
            <div class="d-flex align-end ml-4 mb-4">
              <img width="120px" :src="$store.state.logo" />
              <div class="text-h6 font-weight-bold ml-4 text--secondary">
                /
                <span>为什么选择我们</span>
              </div>
            </div>
            <div class="text-subtitle-2 text--disabled px-4" style="line-height:2">公司成立之初就致力于芭蕾裙、舞蹈服批量定制，产品远销全国及世界各地。深受培训机构，专业人员和用户的信赖。</br>近年来，Fitdance芭蕾舞工厂已成为最具影响力的舞蹈服装生产和销售品牌。我们更愿意做有温度，有情怀的企业。</br>我们将秉承品质为先，客户至上的服务原则，继续助力传承舞蹈文化。</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="7">
        <v-row no-gutters class="d-flex flex-column">
          <v-col>
            <v-row no-gutters>
              <v-col class="pa-1">
                <v-img :src="cases[0]" :aspect-ratio="3.5/2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col class="pa-1">
                <v-img :src="cases[1]" :aspect-ratio="3.5/2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-1">
            <v-img :src="caseImg" :aspect-ratio="7/4">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
const caseImg = require('../static/home/案例04.png')
export default {
  data() {
    return {
      title: `合作案例`,
      subtitle: 'case example',
      caseImg
    }
  },
  computed: {
    cases() {
      return this.$store.state.case
    }
  }
}
</script>

