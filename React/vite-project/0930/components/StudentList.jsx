import React from 'react'

const StudentList = ({students,onEdit,onDelete}) => {
  return (
    <div>
        <ul>
            {students.map((stu) => (
                <li key={stu.id}>
                    {stu.name} | {stu.age} | {stu.major}
                    <button onClick={()=>onEdit(stu)}>수정</button>
                    <button onClick={()=>onDelete(stu.id)}>삭제</button>
                </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default React.memo(StudentList);