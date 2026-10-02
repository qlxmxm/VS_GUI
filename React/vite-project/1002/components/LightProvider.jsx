import React, { createContext, useState } from 'react'

export const ModeContext=createContext();

const LightProvider = ({children}) => {

  const [dark,setDark] = useState(true);

  const toggleTheme=()=>{
    if(dark){
      setDark(false)
    }else{
      setDark(true)
    }
  }

  return (
    <ModeContext value={{dark, setDark, toggleTheme}}>
      {children}
    </ModeContext>
  )
}

export default LightProvider
