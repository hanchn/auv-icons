<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "auv-typography",
  props: {
    style: Object
  },
  setup: (props, context) => { 
      const state = reactive({

      })
      return {
        ...toRefs(props),
        context,
        ...toRefs(state)
      }
    }
  }

</script>
<style></style>