import React, { useState } from 'react';

// 1. 앞으로 추가될 수 있는 입력 필드들을 한곳에서 관리하는 '설정 데이터'입니다.
// 새로운 필드가 필요하면 여기에 객체 하나만 추가하면 끝납니다!
const INPUT_FIELDS = [
  { id: 'name', label: '이름', placeholder: '이름을 입력하세요' },
  { id: 'email', label: '이메일', placeholder: '이메일을 입력하세요' },
  // { id: 'phone', label: '전화번호', placeholder: '전화번호를 입력하세요' }, // ← 나중에 이렇게만 추가하면 됨
];

// 설정 데이터를 기반으로 초기 상태를 동적으로 자동 생성합니다. { name: "", email: "" }
const initialInputState = INPUT_FIELDS.reduce((acc, field) => {
  acc[field.id] = "";
  return acc;
}, {});

const App = () => {
  // 2. 초기 상태 구조를 동적으로 묶어 관리합니다.
  const [input, setInput] = useState(initialInputState);
  const [todo, setTodo] = useState([]);
  const [modiId, setModiId] = useState(null);

  // 통합 입력 핸들러 (fields가 늘어나도 이 코드는 수정 불필요)
  const onCh = (e) => {
    const { name, value } = e.target;
    setInput({...input, [name]: value});
  };

  // 추가 및 수정 핵심 로직
  const onAddUpdate = () => {
    // 필수 값 검증 (여기서는 첫 번째 필드인 'name'가 비어있는지 확인)
    if (input[INPUT_FIELDS[0].id].trim() === '') return;

    if (modiId !== null) {
      // 수정 모드: 모든 필드 데이터를 동적으로 맵핑하여 업데이트
      setTodo(todo.map((item) => item.id === modiId ? { ...item, ...input } : item));
      setModiId(null);
    } else {
      // 추가 모드: id와 함께 모든 입력 필드 값을 통째로 저장
      setTodo([...todo, { id: Date.now(), ...input }]);
    }
    setInput(initialInputState); // 입력창 전체 초기화
  };

  // 수정 버튼 클릭
  const onModify = (item) => {
    // 항목에 들어있던 필드 데이터들을 입력창 상태에 그대로 복사
    const targetInput = {};
    INPUT_FIELDS.forEach(field => {
      targetInput[field.id] = item[field.id] || "";
    });
    setInput(targetInput);
    setModiId(item.id);
  };

  // 삭제 버튼 클릭
  const onDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
    if (id === modiId) {
      setModiId(null);
      setInput(initialInputState);
    }
  };

  return (
    <div>
      <h2>스마트 데이터 관리 목록</h2>
      
      {/* 3. INPUT_FIELDS 배열을 돌면서 입력창들을 자동으로 생성합니다 (하드코딩 제거) */}
      <div>
        {INPUT_FIELDS.map((field) => (
          <input
            key={field.id}
            name={field.id}
            value={input[field.id]}
            onChange={onCh}
            placeholder={field.placeholder}
          />
        ))}
        <button onClick={onAddUpdate}>
          {modiId !== null ? "수정완료" : "추가"}
        </button>
      </div>

      {/* 4. 출력 영역 또한 INPUT_FIELDS를 기반으로 유연하게 노출합니다 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <span>
              {INPUT_FIELDS.map((field, idx) => (
                <span key={field.id}>
                  {idx > 0 && " | "} {/* 필드 구분 기호 */}
                  <strong>{field.label}:</strong> {item[field.id]}
                </span>
              ))}
            </span>
            <button onClick={() => onModify(item)}>수정</button>
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
