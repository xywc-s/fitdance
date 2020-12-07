<!--
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-12-02 15:54:14
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class extends Vue { }
</script>
