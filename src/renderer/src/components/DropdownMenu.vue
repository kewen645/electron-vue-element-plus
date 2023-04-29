<template>
  <div class="opacity-0 group-hover:opacity-100">
    <el-dropdown>
      <hamburger-button theme="outline" size="25" class="icon" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="quit">Quit</el-dropdown-item>
          <el-dropdown-item>
            <a href="https://github.com/kewen645" target="_blank">Visit Me</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { HamburgerButton } from '@icon-park/vue-next'

const quit = () => window.api.quit()
</script>

<style lang="scss"></style>