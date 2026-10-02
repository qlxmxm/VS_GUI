// import React, { useContext } from 'react'
// import { AdminContext } from './AdminProvider';

// const ModiButton = (props) => {
    
//     const {isAdmin}=props;

//     const value1=useContext(AdminContext);
//     console.log(value1);
//     //AdminContext.Provider가 전달한 값 받아오는 역할


//   return (
//     <div>
//       <button disabled={!isAdmin}>관리자만 볼수있음</button>
//     </div>
//   )
// }

// export default ModiButton

//useContext변경된것
import React, { useContext, useState } from 'react'
import { AdminContext } from './AdminProvider';

const ModiButton = () => {

    const {isAdmin}=useContext(AdminContext);
    


  return (
    <div>
      <button disabled={!isAdmin}>관리자만 볼수있음</button>
    </div>
  )
}

export default ModiButton