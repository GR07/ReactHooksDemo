import React, { useState ,useEffect ,useCallback } from 'react';
// 自定义 Hooks 函数
// 其实和我们以前写的JS函数没什么区别
function useWinSize() {
  const [size, setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[]) 
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[])

  return size;

}


// 组件使用自定义 Hooks 函数
function Example6() {

  const size = useWinSize()
  return (
    <div>页面Size:{size.width}x{size.height}</div>
  )
}

export default Example6
