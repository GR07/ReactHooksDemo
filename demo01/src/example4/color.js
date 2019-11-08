import React, { createContext, useReducer } from 'react';
// 用 createContext 创建一个容器（组件）
const ColorContext = createContext({})

// 更改颜色方法的常量名
const UPDATE_COLOR = "UPDATE_COLOR"

const reducer= (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}


// color 可以看作一个容器，用它包裹的组件可以接收到它的 value 值
const Color = (props) => {
  // 把color、dispatch共享出去
  const [color, dispatch] = useReducer(reducer, 'blue')

  return (
    <ColorContext.Provider value={{color, dispatch}}>
      { props.children }
    </ColorContext.Provider>
  )
}
export {
  ColorContext,
  Color,
  UPDATE_COLOR
}