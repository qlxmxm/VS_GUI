import React, { useContext, useState } from 'react'
import { FormContext } from './components/Form1'

const App = () => {

  // 1. Form1.jsx에 - createContext();

  // 2. FormProvider.jsx - 초기값 설정(이름으로)

  // 3. useContext로 값 가져와 출력


  const context=useContext(FormContext);

  return (
    <div>
      {context}
    </div>
  )
}

export default App