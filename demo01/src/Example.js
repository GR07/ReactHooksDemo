import React, { useState } from 'react';

function Example() {
  // useState 是一个方法返回一个数组，但不可以在条件判断语句中使用。
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击自增 {count}</p>
      <button onClick={() => {setCount(count+1)}}>点我</button>
    </div>
  )
}

export default Example