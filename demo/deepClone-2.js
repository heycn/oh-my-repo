// 需要一个 Map，为什么是 Map 而不是对象呢？
// 因为我们的 key 是个对象，如果是 Object，那么他的 kay 就是 String 或者 Symbol
const cache = new Map()
const deepClone = (a) => {
  // 在深拷贝的时候检查一下
  if (cache.get(a)) { // 如果发现 a 已经存在
    // 就直接返回已经被我拷贝的东西
    return cache.get(a)
  }
  if (a instanceof Object) {
    let result
    if (a instanceof Function) {
      if (a.prototype){
        result = function() { return a.apply(this, arguments) }
      } else {
        result = (...args) => { return a.call(undefined, ...args) }
      }
    } else if(a instanceof Array) {
      result = []
    } else if (a instanceof Date) {
      result = new Date(a - 0)
    } else if (a instanceof RegExp) {
      result = new RegExp(a.source, a.flags)
    } else {
      result = {}
    }
    // 构造出 result 之后往 cache 放东西
    cache.set(a, result)
    for(let key in a) {
      result[key] = deepClone(a[key])
    }
    return result
  } else {
    return a
  }
}

// 写的不错，请问还有什么问题？
