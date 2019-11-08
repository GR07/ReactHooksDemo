import React, {useRef, useState, useEffect } from 'react';

function Example5() {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current.value = `我是通过useRef 获取到的 dom 元素`
    console.log(inputEl)
  }
  const [text, setText] = useState('hooks')
  const textRef = useRef()
  useEffect(()=>{
    textRef.current = text;
    console.log('textRef.current:', textRef.current)
})
  return (
    <>
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>在input中显示文字</button>
      <br/>
      <br/>
      <input value={text} onChange={(e)=>{setText(e.target.value)}} />
    </>
  )
}

export default Example5