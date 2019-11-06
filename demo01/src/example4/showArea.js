import React, { useContext } from 'react';
import { ColorContext } from './color'

function ShowArea() {
  // 因为在 Example4 组件中 包裹了 ShowArea 组件，所以可以用 useContext 获取到 value
  const { color } = useContext(ColorContext)
  return (
    <div style={{color: color}}>字体颜色为{color}</div>
  )
}

export default ShowArea