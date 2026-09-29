import React, { useState } from 'react';

const App = () => {

  const [todo, setTodo]=useState([{id:1, msg:'공부'},
                                  {id:2, msg:'운동'}]);

  const [modiId, setModiId]=useState(null); //수정 항목 id값
  //어떤 항목을 수정중인지 상태로 기억해야 ui를 바꾼다.

  const [modiMsg, setModiMsg]=useState('');

  const onModify=(id,msg)=>{
    setModiId(id);
    setModiMsg(msg);
  }

  const saveClick=(id)=>{
    setTodo(todo.map(todo1 => todo1.id === id ? {...todo1, msg:modiMsg} : todo1));
    //데이터 수정해서 배열에다 업데이트 시킴
    setModiId(null);  //저장 크릭 후 데이터 업데이트 되면서 원래 상태로 id null로 줌
    setModiMsg("")  //msg 비어있게 함
  }



  return(
    <div>

      <ul>
        {/* 수정하려고 하는 id값이 객체배열 돌면서 수정하려고 하는 id값과
            같으면 수정할 수 있는 텍스트 창을 띄울것이다. */}
        {todo.map(todo1 => (
          <li key={todo1.id}>
            {todo1.id === modiId ? (
              <>
                <input value={modiMsg} onChange={(e)=>setModiMsg(e.target.value)} />
                <button onClick={()=>saveClick(todo1.id)}>저장</button>              
              </>
              ):(
                <>
                {/* 수정버튼을 안눌렀을 때 처리할 코드들 */}
                {todo1.msg}
                  <button onClick={()=>onModify(todo1.id, todo1.msg)}>수정</button>
                
                </>
              )
            }
          </li>
            )
          )
        }
        

      </ul>


    </div>
  )

}

export default App;




