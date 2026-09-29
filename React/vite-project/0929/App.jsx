import React, { useState } from 'react'

const App = () => {
  // 1. input 창 상태를 '객체'로 관리하여 이름(name)과 이메일(email)을 동시에 관리합니다.
  const [input, setInput] = useState({ name: "", email: "" });

  // 2. 배열 초기화 (각 항목은 id, name, email 속성을 가집니다)
  const [todo, setTodo] = useState([]);
 
  // 3. 수정 상태 초기화
  const [modiId, setModiId] = useState(null);

  // 통합 input 변경 핸들러 (name 속성을 활용하여 name와 email을 각각 업데이트)
  const onCh = (e) => {
    const { name, value } = e.target;
    setInput({...input, [name]: value});
  };

  // 추가 및 수정 핵심 로직
  const onAddUpdate = () => {
    if (input.name.trim() === '') return; // 빈 값 입력 방지

    if (modiId !== null) {
      // 수정 모드: 선택한 id의 name와 email을 현재 입력값으로 변경
      setTodo(todo.map((todo1) => todo1.id === modiId ? { ...todo1, name: input.name, email: input.email } : todo1))
      setModiId(null); 
      setInput({ name: "", email: "" }); // 수정 완료 후 입력창 비우기
    } else { 
      // 추가 모드: 새로운 객체 생성 시 이메일 데이터도 함께 보관
      setTodo([...todo, { id: Date.now(), name: input.name, email: input.email }])
      setInput({ name: "", email: "" }); // 추가 후 입력창 비우기
    }
  };

  // 수정 버튼 눌렀을 때
  const onModify = (todo1) => {
    // 입력창에 기존 데이터(할 일, 이메일 둘 다)를 채워줍니다.
    setInput({ name: todo1.name, email: todo1.email });
    setModiId(todo1.id);  
  };

  // 삭제 버튼 눌렀을 때
  const onDelete = (id) => {
    setTodo(todo.filter((todo1) => todo1.id !== id));

    if (id === modiId) {
      setModiId(null); 
      setInput({ name: "", email: "" }); 
    }
  };

  return (
    <div>
      <h2>이름과 이메일</h2>
      {/* 할 일 입력창: name="name" 지정 */}
      <input 
        name="name"
        value={input.name} 
        onChange={onCh} 
        placeholder='이름' 
      />
      {/* 이메일 입력창: name="email" 지정 */}
      <input 
        name="email"
        value={input.email} 
        onChange={onCh} 
        placeholder='이메일 입력' 
      />
      <button onClick={onAddUpdate}>
        {modiId !== null ? "수정완료" : "추가"}
      </button>
      
      <ul>
        {todo.map((todo1) => (
          <li key={todo1.id}>
            {/* 화면에 이름과 이메일을 함께 출력합니다 */}
            <span>{todo1.name} ({todo1.email})</span>
            <button onClick={() => onModify(todo1)}>수정</button>
            <button onClick={() => onDelete(todo1.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
