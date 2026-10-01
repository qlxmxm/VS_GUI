import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const cntRef=useRef(); //undefined (null, false, 0, "")
  const [init, setInit]=useState(0);

  //렌더링 끝난 뒤에 실행되고 , ref바뀌어도 화면을 다시 그리지 않기 때무에
  //화면의 ref값은 항상 이전값이다.
  useEffect(()=>{
    cntRef.current=init;
    console.log("ref 값: ", cntRef.current);
  },[init]);


  return (
    <div>
      <p>init: {init}</p>
      <p>ref: {cntRef.current}</p>
      <button onClick={()=>setInit(init+1)}>state 1증가</button>
    </div>
  )
}

export default App


// 1. 첫 렌더링

// init=0

// cntRef.current=undefined

// ​

// 2. return 화면에 그려짐

// cntRef.current=undefined이기 때문에 화면에 보이지 않는다.

// ​

// 3. 화면이 다 그려진 후 useEffect실행

// cntRef.current=0

// ​

// 4. ref변경은 리렌더링을 일으키지않아서 화면은 그대로

// ​

// 5. 버튼 클릭!!!!

// setInit(1)로  (init 0 -> 1) 바뀜 -> 리렌더링 시작!

// ​

// 6. 화면 그린다. (init :1 ,cntRef.current:0 - 아직 이전 값인 0이 뜬다)

// ​

// 7. 그려진 이후에 useEffect실행 (cntRef.current : 1) -> 화면에 반영 안됨

// ​

// ​

// 클릭횟수        init              cntRef.current                  

//     0               0               빈칸(암것도안뜸)             

//     1               1                0

//     2               2                1

//     3               3                2

// ​

// ​

// ​

// ​

// ​

// - ref값이 바뀌는것 => cntRef.currents : useEffect가 실행되는 즉시 값이 바뀜

// - 화면이 바뀌는것 => 화면의  <p>ref: {cntRef.current}</p> : 리렌더링이 일어날때만 바뀜