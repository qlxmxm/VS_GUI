import React, { useState, useCallback } from 'react';
import Counter1 from './components/Counter1.jsx';

const App = () => {

  const [count, setCount] = useState(0);

  // useCallback으로 함수를 묶어 컴포넌트가 리렌더링되어도 함수 재생성을 방지
  const up = useCallback(() => {
    setCount((num) => num + 1);
  }, []); // 의존성 배열이 비어있어 처음 한 번만 생성됨

  const down = useCallback(() => {
    setCount((num) => num - 1);
  }, []);

  return (
    <div>
      <button onClick={up}>증가</button>
      <button onClick={down}>감소</button>

      {/* 최적화된 자식 컴포넌트 */}
      <Counter1 count={count} />
    </div>
  );
};

export default App;
