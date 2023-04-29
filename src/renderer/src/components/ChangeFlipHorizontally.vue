<template>
  <el-tooltip v-if="config.page == 'camera'" class="box-item" effect="dark" content="Mirror" placement="top"
    :hide-after="0">
    <flip-horizontally theme="outline" size="25" :stroke-width="3" class="icon" @click="changeFlipHorizontally" />
  </el-tooltip>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'

const { config } = useConfigStore()

// 镜像flip
const changeFlipHorizontally = () => {
  config.flip = !config.flip
  config.videoElement!.style.transform = config.flip ? 'rotateY(180deg)' : ''
}
</script>

<style lang="scss"></style>