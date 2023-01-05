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
const tree = await readdir(entry)

tree.map((item, index) => { 
  let splitList = item.split('.')
  if (splitList.length === 1) { 
    let val = splitList[0]
    config.list += `
    ${val + (tree.length - 2 <= index ? `` : `,\n`)}`
    config.importList += `\nimport ${val} from "./${val}/index.vue"`
    config.exportList += `
  ${tree.length - 2 <= index ? val + '\n}\n' : val + ','}`
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

template = config.importList + template + config.exportList + `\nexport default { install }\n`


writeFile(config.output, template)