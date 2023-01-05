
import Button from "./Button/index.vue"
import Typography from "./Typography/index.vue"

function isPlugin(item){
  return item.install
}

export function install(Vue) {
  const components = [
    Button,

    Typography,

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
  Button,
  Typography,
export default { install }
