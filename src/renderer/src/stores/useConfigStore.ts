import { defineStore } from 'pinia'
import { ref } from 'vue'

// use pinia setup store(similar to composition), NOT option store
export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      deviceId: '',
      page: 'settings',
      rounded: false,
      borderWidth: '0px',
      borderColor: '',
      aspectRatio: 16 / 9,
      videoElement: null as null | HTMLVideoElement,
      flip: false
    })

    return { config }
  },
  {
    persist: true
  }
)
