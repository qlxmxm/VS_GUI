import React, { useState } from 'react'

const Add = ({onAdd}) => {

  //useState 상태변화 일어나면 -> set
  const [content, setContent]=useState('');

  const onChContent=(e)=>{
    setContent(e.target.value); //입력한 값이 content에 저장됨
  }

  const onAdd2=()=>{
    //추가버튼 클릭했을 때
    //기존배열에 새로운 newTodo객체 삽입하기
    onAdd(content)
  }


  return (
    <div>
      <input onChange={onChContent} placeholder='오늘 뭐할거임?'/>
      <button onClick={onAdd2}>추가</button>
      
    </div>
  )
}

export default Add
