// 5. context를 만들어 provider로 dark(변수), toggleTheme(함수)를 자식 컴포넌트한테 전달한다.

// 버튼을 클릭할때마다 버튼이름을 다크모드/라이트모드로 변경한다.

// toggleTheme에는 dark를 false/true로 바꾸는 함수를 구현한다.

import React, { useContext, useState } from 'react';
import { ModeContext } from './components/LightProvider';

const App = () => {

  const {dark, setDark, toggleTheme}=useContext(ModeContext);

  const click=()=>{
    toggleTheme();
  }

  return (
    <div>
      <button onClick={click}>{dark? "다크모드" : "라이트모드"}</button>

    </div>
  );
};

export default App
