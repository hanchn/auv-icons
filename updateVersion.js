import fs from 'fs'
function getPackageJson() {
  let data = fs.readFileSync('./package.json')
  return JSON.parse(data)
}
let packageData = getPackageJson()
let arr = packageData.version.split('.')
arr[2] = parseInt(arr[2]) + 1;
packageData.version = arr.join('.');//转换为以"."分割的字符串
fs.writeFile(
  './package.json',
  JSON.stringify(packageData, null, "\t"
  ),
  (err) => { }
);