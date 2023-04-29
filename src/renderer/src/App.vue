<template>
  <Suspense>
    <main class="relative group" @contextmenu="contextMenu">
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Settings v-else />
      </section>
    </main>
  </Suspense>
</template>

<script setup lang="ts">
// import useConfig from './composables/useConfig'
// const { config } = useConfig()

import Camera from './views/Camera.vue'
import Settings from './views/Settings.vue'
import { useConfigStore } from './stores/useConfigStore'

const { config } = useConfigStore()

// 退出
const contextMenu = () => {
  window.api.contextMenu()
}
</script>