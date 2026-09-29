import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const [todo, setTodo] = useState([]);
  const [modiId, setModiId] = useState(null);

  // 추가 및 수정 핵심 로직
  const onAddUpdate = () => {
    if (name.trim() === '') return; // 이름 공백 방지

    if (modiId !== null) {
      // 수정 모드: 분리되어 있는 name과 mail 값을 가져와 배열에 반영합니다.
      setTodo(todo.map((todo1) => todo1.id === modiId ? { ...todo1, name: name, email: mail } : todo1))
      setModiId(null); 
      setName(""); 
      setMail("");
    } else { 
      // 추가 모드
      setTodo([...todo, { id: Date.now(), name: name, email: mail }])
      setName(""); 
      setMail("");
    }
  };

  // 수정 버튼 눌렀을 때
  const onModify = (todo1) => {
    // 분리된 각각의 상태 변경 함수에 해당 항목의 데이터를 채워 넣습니다.
    setName(todo1.name);
    setMail(todo1.email);
    setModiId(todo1.id);  
  };

  // 삭제 버튼 눌렀을 때
  const onDelete = (id) => {
    setTodo(todo.filter((todo1) => todo1.id !== id));

    if (id === modiId) {
      setModiId(null); 
      setName(""); 
      setMail("");
    }
  };

  return (
    <div>
      <h2>이름과 이메일</h2>
      {/* name 속성을 빼고, onChange 내부에서 각각의 상태 변경 함수를 바로 실행합니다 */}
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='이름' />
      <input value={mail} onChange={(e) => setMail(e.target.value)} placeholder='이메일 입력' />
      <button onClick={onAddUpdate}>{modiId !== null ? "수정완료" : "추가"}</button>
      
      <ul>
        {todo.map((todo1) => (
          <li key={todo1.id}>이름: {todo1.name} 이메일: {todo1.email}
            <button onClick={() => onModify(todo1)}>수정</button>
            <button onClick={() => onDelete(todo1.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
