import React, { useEffect, useState } from 'react'

const PintarPlanEstudios = ({ codPlan, dataSemestres }) => {


    const [btnPeriodo, setBtnPeriodo] = useState()

    console.log(btnPeriodo)

    let semestre = parseInt(btnPeriodo)

    console.log(semestre)
    console.log(dataSemestres)

    let display
    let asignaturas

    try {
        display = dataSemestres.map((item, index) => {
            let { periodo, semestreCursado, tipoSemestre, creditos, asignaturas } = item
            return (
                <div key={index} className='bg-gray-200 w-full relative text-center'>
                    <input
                        type="radio"
                        className="btn-check hidden"
                        name="options-outlined"
                        id={`${index}-${codPlan}`}
                        autoComplete="off"
                        onClick={() => {
                            setBtnPeriodo(`${index}`)
                        }}
                    />
                    <label
                        className="btn btn-outline-success table w-full h-full p-[5px]"
                        htmlFor={`${index}-${codPlan}`}
                    >
                        <small>Asignaturas periodo {periodo} </small><br /> <strong>semestre {semestreCursado}</strong>
                        {
                            (() => {
                                if (tipoSemestre === 'Por cursar') {
                                    return (
                                        <span className='absolute top-[5px] right-[5px] text-[10px] bg-red-50 text-white rounded-full p-[5px]'></span>
                                    )
                                } else if (tipoSemestre === 'Cursado') {
                                    return (
                                        <span className='absolute top-[5px] right-[5px] text-[10px] bg-green-500 text-white rounded-full p-[5px]'></span>
                                    )
                                } else if (tipoSemestre === 'Actual') {
                                    return (
                                        <span className='absolute top-[5px] right-[5px] text-[10px] bg-blue-500 text-white rounded-full p-[5px]'></span>
                                    )
                                }
                            })()
                        }
                    </label>
                </div>
            )
        })

        asignaturas = dataSemestres[semestre].asignaturas.map((itemAsignatura, indexAsignatura) => {
            let { codigo, creditos, nombre, nota, status, tipo } = itemAsignatura
            return (
                <div key={indexAsignatura} className='bg-blue-300 text-white p-1'>
                    <p>
                        {codigo}
                        <br />
                        {creditos}
                        <br />
                        {nombre}
                        <br />
                        Nota: {nota.toFixed(2)}
                        <br />
                        {status}
                        <br />
                        {tipo}
                    </p>
                </div>
            )
        })
    } catch (error) {

    }

    return (
        <div className='grid grid-cols-4 gap-2 mt-5'>
            <div className='grid grid-cols-2 gap-[10px]'>
                {display}
            </div>
            <div className='col-span-3'>
                <div className='grid grid-cols-3 gap-1'>
                    {asignaturas}
                </div>
            </div>
        </div>
    )
}

export default PintarPlanEstudios
