// 4. 숫자를 입력하면 10보다 큰지 작은지 출력

// ex) 10보다 큽니다

// 10보다 작거나 같습니다 
import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState('');

  const on=()=>{
    if(parseInt(num)>10){
      alert('10보다 크다')
    }else{
      alert('10보다 작다')
    }
  }

  return (
    <div>
      <input onChange={(e)=> setNum(e.target.value)} />
      <button onClick={()=>on()}>숫자 확인</button>

    </div>
  );
};

export default App;
