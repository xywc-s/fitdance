<template>
  <section id="factory">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row no-gutters>
      <v-row class="col-6 d-flex my-2" no-gutters>
        <v-col class="left col-7">
          <v-img :src="factories[0]" height="100%">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col class="center col-5 d-flex flex-column px-2">
          <v-img :src="factories[1]" width="100%">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-img :src="factories[2]" width="100%" class="my-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-img :src="factories[3]" width="100%">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-col class="right col-6 my-2">
        <v-img :src="factories[4]" aspect-ratio="1.1">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `工 / 厂 / 能 / 力`,
      subtitle: 'factory can force'
    }
  },
  computed: {
    factories() {
      return this.$store.state.factory
    }
  },
  mounted() {
    console.log('factories', this.factories);
    console.log('state', this.$store.state);
  }
}
</script>
<style lang="scss" scoped>
#factory {
  .left {
    background-color: greenyellow;
  }
  .center {
    background-color: khaki;
  }
  .right {
    background-color: indianred;
  }
}
</style>
