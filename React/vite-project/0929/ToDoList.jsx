import React, { useState } from 'react';
//rafce
const App = () => {
  //할 일 목록(배열)과 입력창의 텍스트를 상태(State)로 관리합니다.
  const [todo, setTodo] = useState([]);

  //추가버튼 눌렸을 때 객체배열에 추가
  const [newContent, setNewContent] = useState('');

  //할 일을 목록에 추가하는 핵심 로직 (공통 사용)
  const addTodo = () => {
    if (newContent.trim() === '') return; // 빈 값 입력 방지

    setTodo([...todo, newContent]); // 기존 목록에 새 할 일 추가
    //[{msg:newContent에 넣은 값}] = todo에 저장된다.
    setNewContent(""); // 입력창 초기화
  };

  //엔터 키를 눌렀을 때 실행
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div id="main">
      <h2>To Do List</h2>
      
      {/* 글 작성 입력창 */}
      <input 
        type="text" 
        placeholder="할 일 입력해라"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      
      {/* 추가 버튼 */}
      <button onClick={addTodo}>추가</button>
      
      {/* 할 일 목록 출력 영역 */}
      <ul>
        {todo.map((todo1) => {
          return <li>{todo1}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
