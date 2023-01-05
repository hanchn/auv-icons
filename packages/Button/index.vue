<template>
  <button :style="style_" :class="class_" :size="size_" :type="type_">
    <slot></slot>
  </button>
</template>
<script>
import './style.css'
import { initState } from '../utils.js'
import { propTypes, staticState } from './static.js'
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: "auv-button",
  props: {
    ...propTypes
  },
  setup: (props) => { 
    const state = reactive({
      ...staticState
    })

    onMounted(() => {
      initState(state, props)
    })
    
    return {
      ...toRefs(state)
    }
  }
}
</script>
