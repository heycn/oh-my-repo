const deepClone = (a) => {
  if (a instanceof Object) { // 判断类型（不考虑 iframe
    let result // 拷贝的结果
    if (a instanceof Function) { // 如果是函数，则需要判断普通函数和箭头函数
      if (a.prototype){ // 有 prototype 则是普通函数，则返回一个函数
        // 传 this 给我，我就传 this 给 a，传什么参数给我，我就传什么参数给 a，然后把 a 的返回值作为我的返回值 
        // 这样我的输入和输出和 a 一模一样，所以我是 a 的深拷贝
        result = function() { return a.apply(this, arguments) }
      } else { // 如果是箭头函数，则返回一个箭头函数，
        // 传给我什么参数，我就把什么参数传给 a，箭头函数没有 this，则返回undefined，把 a 的返回值作为我的返回值
        result = (...args) => { return a.call(undefined, ...args) }
      }
    } else if(a instanceof Array) { // 如果是数组，则返回一个空数组
      // 数组的内容由下面递归拷贝
      result = []
    } else if (a instanceof Date) { // 如果是日期，则返回一个Date
      // 日期的内容为传给我的时间戳（把日期减0就会得到数字，这个数字是时间戳）或者 ISO 8601 字符串
      result = new Date(a - 0)
    } else if (a instanceof RegExp) { // 如果是正则，则返回一个正则
      // 正则的内容为传给我的 source 和 flags
      result = new RegExp(a.source, a.flags)
    } else { // 其他的则是普通对象，则返回一个空对象
      // 对象内容有下面递归拷贝
      result = {}
    }
    for(let key in a) {
      // 递归：把 a 的所有子属性再深拷贝一遍
      result[key] = deepClone(a[key])
    }
    return result
  } else {
    // 不是对象则是：string number bool null undefined symbol bigint
    // 则直接返回 a
    return a
  }
}


// 这样深拷贝就写完了
// 但是！这个代码有问题！
// 如果 a.self = a，那么就会在递归里出不来
// 那么需要检查循环引用