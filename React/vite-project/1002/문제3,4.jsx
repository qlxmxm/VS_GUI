// import React, { useCallback } from 'react';

// const App = () => {

  // 3. "알림" 버튼 클릭 시 alert("안녕!") 실행
  // 함수는 useCallback으로 생성
  
//   const hi = useCallback(() => {
//     alert("안녕!");
//   }, []);

//   return (
//     <div>
//       <button onClick={hi}>알림</button>
//     </div>
//   );
// };

// export default App;


import React, { useContext, useState } from 'react'
import { FormContext } from './components/Form2'

const App = () => {

  // 4. Provider에서 이름 값을 제공
  // 다른 컴포넌트에서 그 이름을 화면에 출력

  const context=useContext(FormContext);

  return (
    <div>
      {context}
    </div>
  )
}

export default App