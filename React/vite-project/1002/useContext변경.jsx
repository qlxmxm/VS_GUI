import React, { useContext, useState } from 'react'
import Child1 from './components/Child1';
import { AdminContext } from './components/AdminProvider';

const App = () => {

  //AdminContext에서 현재 값 가져옴
  const {isAdmin, setIsAdmin}=useContext(AdminContext);

  //관리자 전환버튼 누르면 false->true, true->false
  const onSwitch=()=>{
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      {isAdmin ? <p>관리자</p> : <p>관리자 아니다</p>}
      <button onClick={onSwitch}>관리자 전환버튼</button>
      <Child1 />
    </div>
  )
}

export default App