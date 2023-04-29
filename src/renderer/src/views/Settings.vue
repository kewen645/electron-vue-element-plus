<template>
  <main class="bg-[#2c3e50] w-screen h-screen">
    <section class="p-5 flex flex-col gap-3 pt-10">
      <h2 class="text-gray-100 text-center text-sm opacity-80 font-mono">Parameter Settings</h2>
      <el-select v-model="config.deviceId" placeholder="Choose a camera" clearable filterable size="large">
        <el-option v-for="item in cameras" :key="item.deviceId" :label="item.label" :value="item.deviceId" />
      </el-select>
      <el-input v-model="config.borderWidth" placeholder="Border width" clearable size="large" />
      <el-input v-model="config.borderColor" placeholder="Border color" clearable size="large" />


    </section>

    <!-- 菜单图标 -->
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '../stores/useConfigStore'
import Footer from '../components/Footer.vue'

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter(d => d.kind.includes('video'))
const { config } = useConfigStore()

</script>

<style lang="less" scoped></style>