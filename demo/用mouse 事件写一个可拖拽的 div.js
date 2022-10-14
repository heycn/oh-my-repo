var dragging = false // 声明变量 拖拽，默认 false
var position = null // 声明变量 坐标，默认 null

// 监听鼠标被按下
xxx.addEventListener('mousedown', function (e) {
  dragging = true // 如果被按下，变为 true
  position = [e.clientX, e.clientY] // 获取按下鼠标时的坐标
})

// 监听鼠标移动
document.addEventListener('mousemove', function (e) {
  // 获取鼠标的坐标
  if (dragging === false) {
    return
  }
  const x = e.clientX
  const y = e.clientY
  const deltaX = x - position[0]
  const deltaY = y - position[1]
  const left = parseInt(xxx.style.left || 0)
  const top = parseInt(xxx.style.top || 0)
  xxx.style.left += left + deltaX + 'px'
  xxx.style.top += top + deltaY + 'px'
  position = [x, y]
})
document.addEventListener('mouseout', function (e) {
  dragging = false
})

/* 
1. 声明变量 dragging：是否被拖拽，默认为 false
2. 声明变量 position：坐标，默认为 null
3. 监听鼠标被按下，按下则把 dragging 变为 true
4. 监听鼠标移动，判断是否在拖动，然后获取鼠标坐标，监听的是 document，监听 div 的话，当移动快了鼠标移除 div 之后，会有无法移动的情况
5. 获取按下鼠标时的坐标，细节：left 和 top 是有 px的，px 后面不能加数字，需要parseInt，而且一开始 left 和 top 可能是空的，所以需要给它初始值 0
6. 计算鼠标移动了多少
7. 把位移写在 div 上面：div 的坐标加上位移
8. 把拖动后的坐标 写给下一次鼠标按下的开始
9. 监听当鼠标松开，则无法移动：把 dragging 设置为 false
*/
