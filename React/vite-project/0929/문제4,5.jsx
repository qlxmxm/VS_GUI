// 4. 이름 입력해 → 추가 버튼 클릭 시 목록에 추가(초기값은 비어있는 목록 [])
// 5. 각 이름 옆에 삭제 버튼 (useState로 목록 배열 관리 , 삭제 시 filter 사용)

import React, { useState } from 'react';
//rafce
const App = () => {
  const [todo, setTodo] = useState([]);

  const [newContent, setNewContent] = useState('');

  const addTodo = () => {
    if (newContent.trim() === '') return;

    const newTodoItem = {
      id: Date.now(), // 삭제 시 매칭할 고유 식별자
      text: newContent
    };

    setTodo([...todo, newTodoItem]);
    setNewContent(""); 
  };

  // 3. filter를 사용하여 클릭한 항목의 id만 제외한 새 배열로 상태를 변경합니다.
  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  //엔터 키를 눌렀을 때 실행
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div id="main">
      <h2>이름입력</h2>
      
      {/* 글 작성 입력창 */}
      <input 
        type="text" 
        placeholder="이름을 입력하세요"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      
      {/* 추가 버튼 */}
      <button onClick={addTodo}>추가</button>
      
      {/* 할 일 목록 출력 영역 */}
      <ul>
        {todo.map((todo1) => {
          return (
            <li key={todo1.id}>
              {todo1.text} {/* 이름 출력 */}
              
              {/* 4. 각 이름 옆에 삭제 버튼을 배치하고 클릭 시 id를 전달합니다. */}
              <button 
                onClick={() => deleteTodo(todo1.id)} >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

// 다른방법
// import React, { useState } from 'react';
// //rafce
// const App = () => {

//   const[name, setName]=useState('')
//   const[nlist, setNlist]=useState([])

//   const add=()=>{
//     setNlist([...nlist, {id:nlist.length+1, name:name}])  //[id:1, name:dsf]
//     setName("")
//   }

//   const deleteLi=(id)=>{
//     // nlist.filter((i)=>i.id !=id)
//     setNlist(nlist.filter((i) => i.id !== id));
//   }

//   return (
//     <div>
//       <input placeholder='이름 입력' onChange={(e)=>setName(e.target.value)} value={name} />

//       <button onClick={add}>추가</button>

//       <ul>
//         {nlist.map((i)=>{
//           return(
//             <li key={i.id}>{i.name}
//             <button onClick={()=>deleteLi(i.id)}>삭제</button></li>
//           )
//         })}
//       </ul>

//     </div>
//   )

// }

// export default App;

