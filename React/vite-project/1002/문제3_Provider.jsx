import React, { useContext } from 'react';
import { UserContext } from './components/UserProvider';

function App() {

  const {user,setUser}=useContext(UserContext);

  const save=()=>{
    setUser('홍길동');
  }

  return (
      <div>
        <button onClick={save}>Save</button>
        <p>이름은 : {user}</p>
      </div>
  );
}

export default App;
