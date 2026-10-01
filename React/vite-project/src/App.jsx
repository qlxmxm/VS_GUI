import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const [status, setStatus] = useState('버튼');
  const inRef=useRef(null);

  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (status !== '로딩중...') return;

    inRef.current = setTimeout(() => {
      setStatus('완료!');
    }, 3000);

    return () => clearInterval(inRef.current );
  }, [status]); 

  useEffect(() => {
    const list = [];
    for (let i = 1; i <= num; i++) {
      list.push(i);
    }
    setList(list);
  }, [num]);

  return (
    <div>
      <h2>글자 수 세기</h2>
      <input
        placeholder="문장을 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
      />
      <div>
        공백 포함: {text.length}자 | 공백 제외: {text.replace(/\s/g, '').length}자
      </div>

      <div>      
        <button onClick={()=>setStatus('로딩중...')}>{status}</button>
      </div>

      <div>
        <input value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
        <div>
          <p>{list}</p>
        </div>
      </div>

    </div>
  );
};

export default App;


