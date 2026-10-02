// import React from 'react'
// import ModiButton from './ModiButton';

// const style={
//   backgroundColor:'pink',
//   width:'100px'
// }


// const Child1 = (props) => {

//   const {isAdmin}=props;

//   return ( //false, undefined, null 화면에 표시되지 않는값
//     <div style={style}>
//       <p>{isAdmin.toString()}</p> 
//       <ModiButton isAdmin={isAdmin}/>
//     </div>
//   )
// }

// export default Child1

//useContext변경된것
import React, { useContext } from 'react'
import ModiButton from './ModiButton';
import { AdminContext } from './AdminProvider';

const style={
  backgroundColor:'pink',
  width:'100px'
}


const Child1 = () => {

  const {isAdmin}=useContext(AdminContext);

  return ( //false, undefined, null 화면에 표시되지 않는값
    <div style={style}>
      <p>{isAdmin.toString()}</p> 
      <ModiButton />
    </div>
  )
}

export default Child1