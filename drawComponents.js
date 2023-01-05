import { readdir, writeFile } from 'node:fs/promises';

const config = {
  entry: './packages',
  output: `./packages/index.js`,
  components: [],
  importList: ``,
  exportList: `\nexport {`,
  list: ``
}

const { entry } = config
let tree = await readdir(entry)
tree = tree.filter(v => v.split('.').length === 1)
tree.map((item, index) => { 
  const testEnd = tree[index + 1] ? ',' : ''
  let splitList = item.split('.')
  if (splitList.length === 1) { 
    let val = splitList[0]
    config.list += `
    ${val + testEnd}`
    config.importList += `\nimport ${val} from "./${val}/index.vue"`
    config.exportList += `
  ${val + testEnd}`
  }
})

let template = `\n
function isPlugin(item){
  return item.install
}

export function install(Vue) {
  const components = [${ config.list }
  ]
  components.forEach(item => {
    if (isPlugin(item)) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}\n`

template = config.importList + template + config.exportList + `\n}\nexport default { install }\n`


writeFile(config.output, template)