import React, { useState } from 'react';
import Add from './components/파일가져와글작성'

const copy=[{id:1, done:false, content:'내용1'},
            {id:2, done:false, content:'내용2'},
            {id:3, done:false, content:'내용3'}
           ];

const App = () => {

  const [todo, setTodo]=useState(copy);

  const onAdd=(content)=>{
    const newTodo={
      id:todo.length+1,
      done:false,
      content:content
    }

    //기존배열에 새로운 newTodo객체 삽입하기 (새로운 배열이 만들어짐) (복사본 +newTodo)
    setTodo([...todo, newTodo]);
  }

  return (
    <div>
      <Add onAdd={onAdd} />
      {todo.map((i)=>{
        return(
          <div key={i.id}>{i.content}
          </div>
        )
      })}


    </div>
  )

}

export default App;




