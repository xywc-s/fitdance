<template>
  <section id="about-us">
    <div class="relative box">
      <div class="text-left container-fuild first-block">
        <FTitle class="pt-12">联系我们</FTitle>
        <v-row>
          <v-col :cols="6" class="mt-10">
            <div class="card pa-16">
              <CompanyInfo
                mainTitle="font-weight-bold color-3 line-height-15"
                subTitle="text-subtitle-2 color-3 line-height-15"
              ></CompanyInfo>
            </div>
            <div class="text-right">
              <button class="mr-2 mt-12 button prim">在线咨询</button>

              <v-tooltip
                eager
                top
                open-on-click
                :open-on-hover="false"
                activator="button.prim"
                open-delay="500"
                color="rgba(255, 255, 255, 1)"
                max-width="270"
              >
                <v-img :src="$store.state.qrcode"></v-img>
              </v-tooltip>
            </div>
          </v-col>
          <v-col :cols="6" class="pl-16">
            <v-form ref="form" class="text-center mt-6" lazy-validation @submit="submitHandle">
              <template v-for="{key,label, rules} in items">
                <div class="relative mx-auto" style="width: 292px">
                  <span class="absolute prefix">{{label}}</span>
                  <v-textarea
                    v-if="key === 'remark'"
                    v-model="form[key]"
                    dense
                    solo
                    flat
                    rows="4"
                    class="font-14"
                  ></v-textarea>
                  <v-text-field
                    v-else
                    v-model="form[key]"
                    :rules="rules"
                    dense
                    solo
                    flat
                    class="mb-2 font-14"
                  ></v-text-field>
                </div>
              </template>
              <v-btn class="mt-2 button blue" type="submit" :loading="loading">提交</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="container-fuild">
      <FTitle class="pt-12 pb-8">企业实力</FTitle>
      <div class="mx-auto second-block relative">
        <img :src="image" />
        <v-row class="info-block" no-gutters>
          <v-col v-for="{number, unit, sub} in $store.state.datas" :key="sub" :cols="6">
            <div class="color-3 font-weight-bold">
              <span style="font-size: 36px;">{{number}}</span>
              <span>{{unit}}</span>
            </div>
            <div class="color-6">{{sub}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="mb-16" style="width:100%;height:1px"></div>
      <Products title="相关产品" class="mb-10"></Products>
    </div>
    <v-snackbar
      v-model="snackbar"
      app
      top
      absolute
      style="top:60px"
      :color="snackbarColor"
    >{{ message }}</v-snackbar>
  </section>
</template>

<script>
const image = require('../static/about/企业实力配图.png')
export default {
  data() {
    return {
      image,
      loading: false,
      snackbar: false,
      message: '',
      snackbarColor: '',
      items: [{
        label: '姓名',
        key: 'name',
        rules: [
          v => !!v || '请留下一个称呼'
        ]
      }, {
        label: '电话',
        key: 'tel',
        rules: [
          v => !!v || '请留下一个联系方式'
        ]
      }, {
        label: '邮箱',
        key: 'email',
        rules: [
          v => !!v ? (/.+@.+/.test(v) || '必须是一个有效的邮箱地址') : true,
        ],
      }, {
        label: '备注',
        key: 'remark'
      }],
      form: {
        name: '',
        tel: '',
        email: '',
        remark: ''
      },

    }
  },
  methods: {
    async submitHandle(e) {
      e.preventDefault()
      if (!this.$refs.form.validate()) return
      try {
        this.loading = true
        const { status } = await this.$email.send(this.form)
        this.loading = false
        if (status === 200) {
          this.message = '提交成功'
          this.snackbarColor = 'rgba(76,175,80,0.95)'

          this.$refs.form.reset()
        } else {
          this.message = '提交失败'
          this.snackbarColor = 'rgba(229,57,53,0.95)'
        }
        this.snackbar = true

      } catch (error) {
        this.loading = false

        this.message = error
        this.snackbarColor = 'rgba(229,57,53,0.95)'
        this.snackbar = true

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  max-height: 640px;
  min-width: 1200px;
  background-image: url('../static/about/banner.png');
  background-position: center;
  .first-block {
    height: 640px;
    .card {
      background-color: rgba(255, 255, 255, 0.4);
      width: 490px;
      margin-left: 90px;
    }
  }
  .button {
    font-size: 12px;
    width: 292px;
    height: 37px;
    border-radius: 5px;
    color: white;
    border: 1px solid #f4f4f4;
    &.prim {
      background-color: $c-primary;
    }
    &.blue {
      background-color: #4496df;
    }
  }
  .prefix {
    font-size: 14px;
    z-index: 1;
    color: #333;
    top: 8px;
    left: -60px;
    height: 24px;
  }
}

.second-block {
  width: 830px;
  height: 330px;
  overflow-y: visible;
  margin-bottom: 100px;
  background-color: $c-bg-gray;
  .info-block {
    position: absolute;
    top: 49px;
    left: 287px + 49px;
    bottom: 49px;
    right: 100px;
  }
}
</style>
