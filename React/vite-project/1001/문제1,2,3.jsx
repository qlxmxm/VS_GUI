// 1. input에 문장을 입력하면 글자 수를 바로바로 출력
// import React, { useState } from 'react';

// const App = () => {
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <h2>글자 수 세기</h2>
//       <input
//         placeholder="문장을 입력하세요."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         rows="5"
//       />
//       <div>
//         공백 포함: {text.length}자 | 공백 제외: {text.replace(/\s/g, '').length}자
//       </div>
//     </div>
//   );
// };

// export default App;

// 2. 버튼 클릭 → "로딩중..." → 3초 후 "완료!" (setTimeout)
// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const [status, setStatus] = useState('버튼');
//   const inRef=useRef(null);

//   useEffect(() => {

//     inRef.current = setTimeout(() => {
//       setStatus('완료!');
//     }, 3000);

//     return () => clearInterval(inRef.current );
//   }, []); 

//   return (
//     <div>      
//       <button onClick={()=>setStatus('로딩중...')}>{status}</button>
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 1; i <= num; i++) {
      list.push(i);
    }
    setList(list);
  }, [num]);

  return (
    <div>
      <input value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
      <div>
        <p>{list}</p>
      </div>
    </div>
  );
};

export default App;



// 하나로 합침
// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const [text, setText] = useState('');

//   const [status, setStatus] = useState('버튼');
//   const inRef=useRef(null);

//   const [num, setNum] = useState(0);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     if (status !== '로딩중...') return;

//     inRef.current = setTimeout(() => {
//       setStatus('완료!');
//     }, 3000);

//     return () => clearInterval(inRef.current );
//   }, [status]); 

//   useEffect(() => {
//     const list = [];
//     for (let i = 1; i <= num; i++) {
//       list.push(i);
//     }
//     setList(list);
//   }, [num]);

//   return (
//     <div>
//       <h2>글자 수 세기</h2>
//       <input
//         placeholder="문장을 입력하세요."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         rows="5"
//       />
//       <div>
//         공백 포함: {text.length}자 | 공백 제외: {text.replace(/\s/g, '').length}자
//       </div>

//       <div>      
//         <button onClick={()=>setStatus('로딩중...')}>{status}</button>
//       </div>

//       <div>
//         <input value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
//         <div>
//           <p>{list}</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default App;


