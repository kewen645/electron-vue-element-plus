<template>
  <!-- 切换圆角摄像头 -->
  <el-tooltip v-if="config.page == 'camera'" class="box-item" effect="dark" content="Round" placement="top"
    :hide-after="0">
    <inner-shadow-top-right theme="outline" size="25" :stroke-width="3" class="icon" @click="changeRounded" />
  </el-tooltip>
</template>

<script setup lang="ts">
import { useConfigStore } from '../stores/useConfigStore'
import { InnerShadowTopRight } from '@icon-park/vue-next'

const { config } = useConfigStore()
const changeRounded = () => {
  config.rounded = !config.rounded
  config.aspectRatio = config.rounded ? 1 : 16 / 9
  window.api.adjustWindowSize({ aspectRatio: config.aspectRatio })
}
</script>

<style lang="scss"></style>