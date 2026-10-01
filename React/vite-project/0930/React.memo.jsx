import React, { useState } from 'react'
import Child1 from './components/Child1';
import Child4 from './components/Child4';

const App = () => {

  const [num, setNum]=useState(0);

  const increase=()=>{
    setNum(num+1);
  }

  return (
    <div>
      <button onClick={increase}>1증가버튼</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
      
    </div>
  )
}

export default App