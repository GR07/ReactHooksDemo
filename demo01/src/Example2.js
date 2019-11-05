import React, { useState, createContext, useContext } from 'react';

// 创建一个组件
const CountContext = createContext()

// 子组件
function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>子组件显示父组件传过来的count：{count}</h2>
  )
}

// 主页面
function Example2() {
  // useState 是一个方法返回一个数组，但不可以在条件判断语句中使用。
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>父组件count： {count}</p>
      <button onClick={() => {setCount(count+1)}}>点我</button>


      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>

    </div>
  )
}

export default Example2