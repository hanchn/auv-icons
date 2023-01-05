<template>
    <Svg :size="size_" :color="color_" :class="class_" v-if="showIcon">
      <path d="M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160"/>
      <path d="M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352" />
    </Svg>
</template>
<script>
import './style.css'
import { initState } from '../utils.js'
import { propTypes, staticState } from './static.js'
import { reactive, toRefs, onMounted } from 'vue'
import Svg from '../Svg/index.vue'
export default {
  name: "icon-view",
  props: {
    ...propTypes
  },
  components: {
    Svg
  },
  setup: (props) => { 
    const state = reactive({
      ...staticState,
      showIcon: false
    })

    onMounted(() => {
      initState(state, props)
      state.showIcon = true
    })
    
    return {
      ...toRefs(state)
    }
  }
}
</script>
