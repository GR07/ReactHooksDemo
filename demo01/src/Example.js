import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// Index组件
function Index() {
  useEffect(() => {
    console.log(`进入index页面时候执行`)
    return () => {
      console.log(`销毁index页面前执行`)
    }
  }, [])

  return (
    <h2>我是index</h2>
  )
}
// List组件
function List() {
  return (
    <h2>我是list</h2>
  )
}
// 主页面
function Example() {
  // useState 是一个方法返回一个数组，但不可以在条件判断语句中使用。
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击自增 {count}</p>
      <button onClick={() => {setCount(count+1)}}>点我</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}

export default Example