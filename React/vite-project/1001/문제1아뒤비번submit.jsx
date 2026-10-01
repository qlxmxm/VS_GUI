// 아이디 , 비밀번호 폼 구현​

// 로그인 버튼 생성 -> submit 으로 설정 (새로고침 막는다)​

// 아이디와 비번이 같으면 "로그인 성공"

// 다르면 "다시 확인 필요" alert로 띄운다.

import React, { useState } from 'react';

const App = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // submit으로 인한 페이지 새로고침 방지

    // 아이디와 비밀번호가 같은지 확인
    if (form.username === form.password && form.username.trim() !== '') {
      alert('로그인 성공');
    } else {
      alert('다시 확인 필요');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="아이디"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />
      <button type="submit">로그인</button>
    </form>
  );
};

export default App;
