import React from 'react'

const PrintDataStudent = ({ dataStudent, datosAcademicos }) => {

    console.log(dataStudent)
    console.log(datosAcademicos)
    let { nombreCompleto, nivelEstudio, codPeriodo } = dataStudent
    return (
        <>
            <ul>
                <li>{nombreCompleto}</li>
                <li>{nivelEstudio}</li>
                <li>{codPeriodo}</li>
                <li></li>
            </ul>
            {
                (() => {
                    if (datosAcademicos.length === 1) {
                        return (
                            <div>
                                <hr />
                                <h3 className='text-pink'>
                                    Programa Cursado
                                </h3>
                            </div>
                        )
                    } else if (datosAcademicos.length > 1) {
                        return (
                            <div>
                                <hr />
                                <h3 className='text-purple'>
                                    Programas Cursados
                                </h3>
                            </div>
                        )
                    }
                })()
            }
        </>
    )
}

export default PrintDataStudent