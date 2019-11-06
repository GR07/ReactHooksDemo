import React, { createContext } from 'react';
// 用 createContext 创建一个容器（组件）
const ColorContext = createContext({})
// color 可以看作一个容器，用它包裹的组件可以接收到它的 value 值
const Color = (props) => {
  return (
    <ColorContext.Provider value={{color: 'blue'}}>
      { props.children }
    </ColorContext.Provider>
  )
}
export {
  ColorContext,
  Color
}