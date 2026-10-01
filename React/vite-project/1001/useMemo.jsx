import React, { useMemo, useState } from 'react'

const App = () => {

  const [num,setNum]=useState(0);
  const [light, setLight]=useState('불들옴');

  const Toggle=()=>{
    if(light=='불들옴')
      setLight('off');
    else
      setLight('on')
  }

  //num*num 계산결과 기억해두고, num이 바뀔때만 다시 계산해줘

  //App렌더링 될때마다 useMemo가 num값이 이전과 같은지 확인
  //같으면 -> 기억해둔 이전 결과 반환
  //같지않으면 -> 재계산

  //onoff버튼 누르면 App렌더링되지만, num은 그대로니까 제곱계산이 안된다..그냥 저장해둔 값쓴다.
  const comp=useMemo(()=>{
    console.log('복잡한 연산 재렌더링');
    return num*num;
  },[num]);

  const upButton=()=>{
    setNum(num+100);
  }

  return (
    <div>
      <button onClick={Toggle}>onoff</button>
      <p>{comp}</p>
      <button onClick={upButton}>num증가</button>
      <p>{num}</p>
      <p>{light}</p>
    </div>
  )
}

export default App