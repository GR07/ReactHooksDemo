import React, { useReducer } from 'react';

function ReducerDemo() {
  // useReducer 接受两个参数 ----- reducer函数、初始值
  // useReducer 返回两个值 ------ count（经过reducer业务逻辑处理后返回的一个值）、dispatch（派发器）
  // 就是把以前 reducer 里的业务逻辑代码放到这里了
  // 下面jsx中的事件 dispatch('add') 就是调用 useReducer
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => {dispatch('add')}}>加法</button>
      <button onClick={() => {dispatch('sub')}}>减法</button>
    </div>
  )
}

export default ReducerDemo