import React, { useEffect, useReducer, useRef, useState } from 'react'

const App = () => {

  const [num, setNum]=useState(0);
  const inRef=useRef(null);

  useEffect(()=>{
    inRef.current=setInterval(()=>{
      setNum(n=>n+1);
    },1000);

    //cleanup함수(useEffect안에서 return하는 함수)
    //언마운트 될때 실행됨(타이머, 이벤트 리스너 등 메모리 차지 하는 것들 정리할때 많이 씀)
    return()=>clearInterval(inRef.current);
  },[]);


  return (
    <div>
      {num}
      {/* {inRef.current} */}
    </div>
  )
}

export default App