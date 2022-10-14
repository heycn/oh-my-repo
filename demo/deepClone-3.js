const cache = new Map()
const deepClone = (a) => {
  if (cache.get(a)) {
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
    cache.set(a, result)
    // 细节在这里，我们在遍历 a 的时候，不能什么都遍历，有些属性是继承得到的，如果是继承得到的，我们不应该去深拷贝它
    for(let key in a) {
      // 如果 key 在 a 的身上，我才会拷贝到 result，如果不在，则是在原型，在原型上我就不拷贝
      if (a.hasOwnProperty(key)) {
        result[key] = deepClone(a[key])
      }
    }
    return result
  } else {
    return a
  }
}