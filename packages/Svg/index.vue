<template>
    <svg 
      :fill="color_"
      :class="class_"
      :xmlns="xmlns" 
      :xmlns:xlink="xlink" 
      :t="t"
      :viewBox="viewBox"
      :width="size_" 
      :height="size_">
      <slot></slot>
    </svg>
</template>
<script>
import './style.css'
import { initState } from '../utils.js'
import { propTypes, staticState } from './static.js'
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: "Svg",
  props: {
    ...propTypes
  },
  setup: (props) => { 
    const state = reactive({
      ...staticState
    })

    onMounted(() => {
      console.log('props ', props)
      initState(state, props)
      console.log(state)
    })
    
    return {
      ...toRefs(state)
    }
  }
}
</script>
