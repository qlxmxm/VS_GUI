import React, { useState } from 'react'
import Child1 from './components/Child1';

const App = () => {

  //isAdmin -> false 
  const [isAdmin, setIsAdmin]=useState(false);

  //관리자 전환버튼 누르면 false->true, true->false
  const onSwitch=()=>{
    setIsAdmin(!isAdmin);
  }



  return (
    <div>
      {isAdmin ? <p>관리자</p> : <p>관리자 아니다</p>}
      <button onClick={onSwitch}>관리자 전환버튼</button>
      <Child1 isAdmin={isAdmin} />
    </div>
  )
}

export default App