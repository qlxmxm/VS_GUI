import React from 'react'
import {FormContext} from "./Form1.jsx"

const FormProvider = (props) => {

    const {children}=props;

  return (
    <FormContext.Provider value={"student"}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
