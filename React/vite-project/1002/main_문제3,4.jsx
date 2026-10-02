import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import FormProvider from './components/FormProvider.jsx'
import FormProvider from './components/FormProvider2.jsx'

createRoot(document.getElementById('root')).render(
  <FormProvider>
    <App /> {/*children*/}
  </FormProvider>
)


//export할때 , default가 아니면 import할때 {컴포넌트}로 받아와야함
//default 면, import 컴포넌트 from

//default export : 파일하나에 컴포넌트 하나가 대응될 때 -> default사용
//named export : 한 파일에 여러개 내보낼때 