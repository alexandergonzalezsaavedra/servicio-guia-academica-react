import React from 'react'
import { useState } from 'react'

const FormLogin = ({ setEstudiante }) => {
    const initialState = { email: '' }
    const [inputs, setInputs] = useState(initialState)
    const { email } = inputs

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        setInputs((old) => ({
            ...old,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            console.log('ingrese un correo valido')
            return
        }
        setEstudiante(email.trim())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-2 justify-center">
                <input
                    className='border px-[15px] py-[8px] border-blue-gray rounded-lg w-2/5'
                    type="text"
                    placeholder='ingrese un correo'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <button className='rounded-lg px-[15px] py-[8px] bg-purple-300 text-white hover:bg-gray transition-all duration-500'>
                    Ingresar
                </button>
            </div>
        </form>
    )
}

export default FormLogin
