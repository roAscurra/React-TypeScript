// import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../../Hooks/useForms'

export const FormComponent = () => {
    // const [email, setEmail] = useState('')
    // const [nombre, setNombre] = useState('')
    // const [edad, setEdad] = useState(0)
    // const [values, setValues] = useState({
    //     email:'',
    //     nombre:'',
    //     edad:0
    // })
    // const { email, nombre, edad} = values;

    // const handleSubmitForm = () => {
    //     // console.log({
    //     //     email,
    //     //     nombre,
    //     //     edad
    //     // })
    //     console.log({email, nombre, edad})
    // }
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { value, name } = event.target;
    //     if(name != 'edad'){
    //         setValues({...values, [`${name}`] : value});
    //     }else{
    //         setValues({...values, [`${name}`] : parseInt(value)});

    //     }
    // }
    const {values, handleChange, resetForm} = useForm({
        email:'',
        nombre:'',
        edad: 0,
    })
    const {email, nombre, edad} = values;

    const handleSubmitForm = () => {
        console.log(values)
    }

    const handleResetForm = () => {
        resetForm()
    }
  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            <input value={email} name='email' onChange={handleChange}
            type="email" placeholder='example@example.com' />
            <input value={nombre} name='nombre' onChange={handleChange} type="text" placeholder='Nombre' />
            <input value={edad} name='edad' onChange={handleChange} type="number" placeholder='Edad' />
        </div>
        <div>
            <button onClick={handleSubmitForm} >Enviar</button>
            <button onClick={handleResetForm} >Resetear</button>
        </div>
       
    </div>
    
  )
}
