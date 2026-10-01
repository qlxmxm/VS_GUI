import React, { useCallback, useState } from 'react'
import Child1 from './components/Child1';
import Child4 from './components/Child4';

const App = () => {

  const [num, setNum]=useState(0);

  const increase=()=>{
    setNum(num+1);
  }

  //함수를 기억해둔다..기억할 함수: setNum
  //[]: 처음 한 번만 만들고 계속 재사용하겠다.
  //[num] : num이 바뀔 때마다 함수를 새로 만들겠다.

  //useCallback - 함수가 처음 한번만 생성되고 재사용됨 -> 동일한 참조값으로 인식
  //App렌더링될때마다 같은 참조값을 가진 주소로 인식-> Child1에서 렌더링 방지됨 
  //ex) 주소 0x01 -> 주소 0x01
  const onClickReset=useCallback(()=>{
    setNum(0); //동일한 참조
  },[]);


  //props가 바뀌지 않아도 부모컴포넌트가 리렌더링되면 자식컴포넌트도 렌더링됨
  //컴포넌트의 props가 바뀌지 않으면 렌더링(자식컴포넌트)되지 않도록 React.memo 감싸줌

  //React.memo는 props의 상태가 바뀌었는지 안바뀌었는지 확인 (얕은 비교)
  //이전의 props와 동일하면 렌더링 생략, props변경되었으면 렌더링 수행

  return (
    <div>
      <button onClick={increase}>1증가버튼</button>
      {num}
      <Child1 onClickReset={onClickReset} />
      {/*App 렌더링 될때마다 onClickReset 함수는 새로 정의된 함수 - 메모리 주소가 달라져
      React.memo는 변경된 props로 인식해서 렌더링 수행*/}
      <Child4 />
    </div>
  )
}

export default App