import React, { useEffect, useState } from 'react'

const StudentForm = ({onSubmit, selected}) => {

    const [student, setStudent]=useState({name:"",age:"",major:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;  //<input>

        setStudent((stu)=>({
            ...stu,
            [name]:value    //name="홍길동" -> name:"홍길동", age:10, major:'computer science'
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!student.name){
            return;
        }
        onSubmit(student); //부모컴포넌트로부터 받은 메소드
        //수정/추가메소드(수정하고싶은 객체)
        setStudent({name:"",age:"",major:""})

    }

    //selected가 바뀔때마다 실행 
    //학생을 선택했으면 (selected=true)-> 선택한 학생정보가 폼에 채워짐
    //학생을 선택 안했으면 (selected=false) -> 빈 폼으로 초기화해라
    useEffect(()=>{
        setStudent(selected || {name:"",age:"",major:""})

    },[selected]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='이름' value={student.name} name='name' onChange={handleChange} />
        <input placeholder='나이' value={student.age} name='age' onChange={handleChange} />
        <input placeholder='전공' value={student.major} name='major' onChange={handleChange} />


        <button type='submit'>{student.id?"수정":"추가"}</button>
      </form>
    </div>
  )
}

export default React.memo(StudentForm); //자식컴포넌트에서 불필요한 렌더링되는거 방지함(React.memo())