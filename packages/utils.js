/**
 * 获取过滤后的props
 * initState
 * params: {
 *   state
 *   props
 * } 
 */

export const initState = (state, props) => {
  for (let [key, item] of Object.entries(props)) {
    if (item) { 
      switch (key) { 
        case 'class':
          state['class_'] += ' ' + item
          break
        default:
          state[`${key}_`] = item
          break
      }
    }
  }
}