import React, { useState } from 'react'

const App = () => {
  //1. input 창 초기화하고
  const [input, setInput]=useState("");

  //2. 배열도 초기화(수정, 삭제, 추가)
  //[{id:1, msg:운동2} {id:2, msg:공부}]
  const [todo, setTodo]=useState([]);
 
  //3. 수정 상태 초기화
  const [modiId, setModiId]=useState(null);


  const onCh=(e)=>{
    setInput(e.target.value); //할 일 입력이 input에 저장됨 ("" => 입력한 값으로 바뀜)
  }

  //1.할일입력한것을 빈 배열에 넣는다.
  //2.수정(modiId 에 값이 있으면 수정)
  const onAddUpdate=()=>{
    //수정 - modiId 에 값이 있으면 수정
    if(modiId!==null){
      setTodo(todo.map((todo1) => todo1.id === modiId ? {...todo1, msg:input} : todo1))
      setModiId(null); //수정완료 후 추가버튼 보이게

    }
    else{ //modiId==null (추가버튼이 보여야하는 상태) - 할일입력한것을 빈 배열에 넣는다.
      setTodo([...todo, {id:Date.now(), msg:input}])

    }
  }

  //수정버튼 눌렀을 때
  const onModify=(todo)=>{
    //수정창에 쓴 데이터로 상태변경
    setInput(todo.msg);
    setModiId(todo.id);  //modiId값을 수정버튼 누른 id값으로 세팅
  }


  //삭제버튼 눌렀을 때
  //todo배열의 id랑 삭제버튼 클릭했을 때의 배열 id값과 같지 않으면 -> 삭제 안 할 배열들만 생성하겠다.
  const onDelete=(id)=>{

    setTodo(todo.filter((todo) => todo.id !==id));

    if(id===modiId){
      setModiId(null); //추가버튼 보이고
      setInput(""); //수정중인걸 삭제한 경우 ""으로 초기화
    }
  }
  

  //수정버튼을 누르기전(modiId -> null) -> 추가버튼 보여야함
  //수정버튼을 누르면(modiId -> null 이 아님)-> 수정할 수 있는 input창 -> 수정완료버튼 보여야함

  return (
    <div>
      <h2>오늘 뭐할까</h2>
      <input value={input} onChange={onCh} placeholder='할 일 입력' />
      <button onClick={onAddUpdate}>{modiId !==null ? "수정완료" :"추가"}</button>
      
      <ul>
        {todo.map((todo1)=>(
          <li key={todo1.id}>{todo1.msg}
            <button onClick={()=>onModify(todo1)}>수정</button>
            <button onClick={()=>onDelete(todo1.id)}>삭제</button>
          </li>
          
        
        ))}
      </ul>
    </div>
  )
}

export default App