import React, { memo } from 'react';

// React.memo로 감싸서 props(count)가 바뀔 때만 리렌더링되도록 최적화
const Counter1 = memo(({ count }) => {

  return (
    <div>
      <h3>현재 카운트: {count}</h3>
    </div>
  );
});

export default Counter1;
