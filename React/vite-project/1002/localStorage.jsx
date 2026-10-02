import React, { useEffect, useState } from 'react'

const App = () => {

  //1.useState초기화 (비어있게- name, email, password)
  const [user, setUser]=useState({name:'', email:'', password:''});

  const onCh1=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

  //user상태가 바뀔때마다 localstorage에 저장
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(user)) //객체 -> 문자열
  },[user])

  const save=()=>{
    alert("저장")
  }

  return (
    <div>
        이름 <input value={user.name} onChange={onCh1} name="name" />
        이메일 <input type="email" value={user.email} onChange={onCh1} name="email" />
        비밀번호 <input type='password' value={user.password} onChange={onCh1} name="password" />

        <button onClick={save}>저장</button>

    </div>
  )
}

export default App
