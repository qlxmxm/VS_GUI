import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const cntRef=useRef(); //undefined 
  const [init, setInit]=useState(0);

  const increase=()=>{
    cntRef.current+=1;
    console.log(cntRef.current);
  }

  //화면이 다 만들어진 뒤에 init값이 변경되면 cntRef.current=init; 실행
  useEffect(()=>{
    console.log('최초 렌더링~');
    cntRef.current=init;
  },[init]);

  console.log(`Ref값 : ${cntRef.current}`);




  return (
    <div>
      <p>{init}</p>
      <p>{cntRef.current}</p>
      <button onClick={()=>setInit(init+1)}>state 1증가</button>
      <button onClick={increase}>ref증가</button>
    </div>
  )
}

export default App


//                       콘솔                   화면(init/ref)                   실제 ref

// 1.첫 렌더링      ref: undefined           (0/(빈칸))                          0   

// 2. ref증가클릭    ref:1                       (0/(빈칸))                          1  

// 3. ref증가클릭    ref:2                       (0/(빈칸))                          2

// 4. state증가클릭                              (1/2)                               

// ​

//                    Ref값 : 2

//                   최초 렌더링~

// ​

// ​

// ​

// ​

// 2,3번에서는 ref값이 실제로 바뀌지만 리렌더링이 일어나지 않았기때문에 화면은 그대로다.

// 4번에서는 state를 증가시켜 setInit -> 리렌더링이 일어남

// -> ref값 2출력, <p>2</p>도 그려짐

// ​

// -> 화면이 다 그려지면, useEffect실행 -> cntRef.current=init 이 실행됨 -> ref가 1로 덮어써짐