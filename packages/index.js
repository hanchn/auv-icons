
import Svg from "./Svg/index.vue"
import View from "./View/index.vue"

function isPlugin(item){
  return item.install
}

export function install(Vue) {
  const components = [
    Svg,
    View
  ]
  components.forEach(item => {
    if (isPlugin(item)) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

export {
  Svg,
  View
}
export default { install }
