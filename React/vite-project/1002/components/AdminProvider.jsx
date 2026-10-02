// import React, { createContext } from 'react'

// //Context 객체 생성 -> 공용보관함 만듬
// //반드시 컴포넌트 밖, 최상단 레벨에 써야된다.
// export const AdminContext=createContext({});

// const AdminProvider = (props) => {
//     console.log(props);

//     const {children}=props;

//     const sampleObj={sampleValue : '테스트'};

//     //AdminContext 라는 컨텍스트를 만들고,
//     //값을 하위 컴포넌트에게 전달하기 위해 AdminProvider를 정의함
//   return ( //context공급자 역할
//     <AdminContext.Provider value={sampleObj}>
//       {children} {/*Provider로 감싼 하위 컴포넌트들 */}
//     </AdminContext.Provider>
//   )
// }

// export default AdminProvider

//useContext변경된것
import React, { createContext, useState } from 'react'

//Context 객체 생성 -> 공용보관함 만듬
//반드시 컴포넌트 밖, 최상단 레벨에 써야된다.
export const AdminContext=createContext({});

const AdminProvider = (props) => {
    console.log(props);

    const {children}=props;

    const [isAdmin, setIsAdmin]=useState(false);

    //AdminContext 라는 컨텍스트를 만들고,
    //값을 하위 컴포넌트에게 전달하기 위해 AdminProvider를 정의함
  return ( //context공급자 역할
    <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminProvider