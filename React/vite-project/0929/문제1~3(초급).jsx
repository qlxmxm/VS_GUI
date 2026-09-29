// 1. 화면에 현재 카운트 표시 
// "클릭" 버튼을 누를 때마다 숫자가 1씩 증가​
// import React, { useState } from 'react';

// const App = () => {
//   // 숫자를 저장하고 변경할 상태(State) 생성 (초기값: 0)
//   const [count, setCount] = useState(0);

//   // 버튼을 누를 때 실행할 함수 (현재 값에 1을 더함)
//   const addCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>카운터 프로그램</h2>
      
//       {/* 화면에 현재 카운트 표시 */}
//       <p>
//         현재 카운트: {count}
//       </p>
      
//       {/* 클릭 버튼 */}
//       <button onClick={addCount}>
//         클릭
//       </button>
//     </div>
//   );
// };

// export default App;

// 다른 방법
// import React, { useState } from 'react';

// const App = () => {
//   // 숫자를 저장하고 변경할 상태(State) 생성 (초기값: 0)
//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setNum(num+1)}>1증가 버튼</button>
//       {num}
//     </div>
//   );
// };

// export default App;

// 2. 컴포넌트가 처음 화면에 나타날 때 "컴포넌트 시작"콘솔에 출력​
// import React, { useState, useEffect} from 'react';

// const App = () => {
//   // 2. 컴포넌트가 처음 화면에 나타날 때 "컴포넌트 시작" 콘솔에 출력
//   useEffect(() => {
//     console.log("컴포넌트 시작");
//   }, []);// 빈 배열([])은 컴포넌트가 처음 마운트될 때 한 번만 실행하라는 의미입니다.
// };

// export default App;

// 3. 숫자 입력 → 그 숫자의 제곱을 화면에 표시
// import React, { useState, useMemo } from 'react';

// const App = () => {
//   // 3번 기능을 위한 숫자 입력 상태 관리
//   const [numberInput, setNumberInput] = useState("");

//   // 3. 숫자 입력에 따른 제곱 계산 로직
//   // 입력값이 변경될 때만 연산이 수행되도록 useMemo로 감싸 최적화했습니다.
//   const squaredNumber = useMemo(() => {
//     const num = Number(numberInput);
//     if (isNaN(num) || numberInput === '') return 0; // 숫자가 아니거나 빈 칸이면 0 반환
//     return num * num;
//   }, [numberInput]);

//   return (
//     <div>
//       <h2>숫자 제곱 계산기</h2>
      
//       {/* 3. 숫자 입력창 */}
//       <div>
//         <input 
//           type="number" 
//           placeholder="숫자를 입력하세요"
//           value={numberInput}
//           onChange={(e) => setNumberInput(e.target.value)}
//         />
//       </div>
      
//       {/* 3. 그 숫자의 제곱을 화면에 표시 */}
//       <p>입력한 숫자의 제곱: {squaredNumber}</p>
//     </div>
//   );
// };

// export default App;

// 다른방법
// import React, { useState } from 'react';

// const App = () => {
  
//   const [num, setNum] = useState();

//   const on=(e)=>{
//     setNum(e.target.value*e.target.value)
//   }

//   return (
//     <div>
//       <input type='text' placeholder='숫자 입력' onChange={on} />
//       {num}
//     </div>
//   );
// };

// export default App;
