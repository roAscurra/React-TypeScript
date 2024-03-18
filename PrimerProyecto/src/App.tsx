import React from 'react'
import { MiPrimerComponente } from './components/MiPrimerComponente/MiPrimerComponente'
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect'
import { FormComponent } from './components/FormComponent/FormComponent'
import { AppProducts } from './components/AppComponent/ListProducts/AppProducts'

export const App = () => {
  
  return (
    <div style={{display: 'flex', flexDirection:'column', gap:'2vh'}}>
      {/* <MiPrimerComponente text='texto prueba' color='red' fontSize={2} />
      <ComponentCounter />
      <ComponentUseEffect /> */}
      {/* <FormComponent /> */}
      <AppProducts />
    </div>
    )
}
