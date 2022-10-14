// 数组去重

// 1. 使用 new Set()
var uniq = function (a) {
  return Array.from(new Set(a)) // new Set 会接受一个数组，会自动地把重复项去掉，但 new Set 不是个数组，是一个集合，然后使用 Array.from，就可以把一个集合变成数组
}

// 装逼写法
var uniq = function (a) {
  return [...new Set(a)]
}

// -------------------------------------

// 2. 使用算法：计数排序的变形
var uniq = function (a) {
  var map = {}
  for (let i = 0; i < a.length; i++) {
    let number = a[i]
    if(number === undefined){ continue }
    if (number in map) { continue }
    map[number] = true
  }
  const result = []
  for(let key in map) {
    result.push(key)
  }
  return result
}
// 缺点：只能把数字变成字符串

// 3. 优化 
var uniq = function (a) {
  var map = {}
  for (let i = 0; i < a.length; i++) {
    let number = a[i]
    if(number === undefined){ continue }
    if (number in map) { continue }
    map[number] = true
  }
  const result = []
  for(let key in map) {
    result.push(parseInt(key))
  }
  return result
}

// 使用 Map
var uniq = function (a) {
  var map = new Map()
  for (let i = 0; i < a.length; i++) {
    let number = a[i]
    if(number === undefined){ continue }
    if (map.has(number)) { continue }
    map.set(number, true)
  }
  return [...map.keys()]
}