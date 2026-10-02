import React from 'react'
import {FormContext} from "./Form2.jsx"

const FormProvider = (props) => {

    const {children}=props;

  return (
    <FormContext.Provider value={"student2"}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
