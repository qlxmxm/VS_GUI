import React, { useCallback, useEffect, useState } from 'react'
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const StudentApp = () => {

  const [students, setStudents]=useState([]);
  const [selected, setSelected]=useState(null);

  //useCallback-> 주소를 고정해서 memo에서 props안바뀐걸로 인식하게 하려고 -> 리렌더링 안되게끔 하려고
  const deleteStudent=useCallback((id)=>{
    setStudents((stu) => stu.filter((s) => s.id !==id));
  },[]);

  const onAddUpdate=useCallback((student)=>{
    if(student.id){ //수정
      //id가 같으면 폼에서 받은 새 객체(수정한값)로 교체, 아니면 기존 객체 유지
      //student : 폼에 입력한 객체{name, age, major}
      setStudents((stu)=>stu.map((s)=>(s.id === student.id ? student : s)),
    )
    }
    else{ //추가 -> 이전배열 복사해서 새로운 객체 {name:'hong'}, {name:'kim', id:고유값}
      //...stu : 기존배열 복사
      //...student :  폼에서 받은 값{name, age, major} +id
      setStudents((stu) => [...stu,  {...student, id:Date.now()}])
    }
    setSelected(null);
  },[]);

  const handleEdit=useCallback((student)=>{
    setSelected(student);
  },[]);


  return (
    <div>
      <h2>학생 정보 관리</h2>
      <StudentForm onSubmit={onAddUpdate} selected={selected} />
      <StudentList students={students} onEdit={handleEdit} onDelete={deleteStudent}/>
      
    </div>
  )
}

export default StudentApp