<template>
  <main class="w-screen h-screen overflow-hidden bg-pink-500 relative" :class="{ 'rounded-full': config.rounded }"
    :style="`border: solid ${config.borderColor} ${config.borderWidth}`">
    <div
      class="absolute w-screen top-1/2 -translate-y-1/2 text-white font-light text-base flex flex-col justify-center items-center">
      Camera Loading...
      <div class="text-xs opacity-90">If no response, please switch camera in settings</div>
    </div>

    <video class="object-cover h-screen w-screen relative z-10" autoplay
      :class="{ 'rounded-full': config.rounded }"></video>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '../stores/useConfigStore'
import Footer from '../components/Footer.vue'

const { config } = useConfigStore()

const constraints = {
  audio: false,
  video: { deviceId: config.deviceId },
} as MediaStreamConstraints

onMounted(() => {
  const video = document.querySelector('video')!
  config.videoElement = video
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="less" scoped></style>