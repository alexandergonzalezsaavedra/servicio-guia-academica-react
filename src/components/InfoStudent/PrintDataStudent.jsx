const PrintDataStudent = ({ dataStudent, datosAcademicos, setCodPlan }) => {
    let { nombreCompleto, nivelEstudio, codPeriodo } = dataStudent

    return (
        <>
            {
                (() => {
                    if (dataStudent.length != 0) {
                        return (
                            <div className='flex justify-center my-4'>
                                <div className='border p-2 w-1/2'>
                                    <h3>{nombreCompleto}</h3>
                                    <small>{nivelEstudio}</small>
                                    <p>{codPeriodo}</p>
                                </div>
                            </div>
                        )
                    }
                })()
            }
            {
                (() => {
                    if (datosAcademicos.length === 1) {
                        return (
                            <div>
                                <hr />
                                <h3 className='text-pink text-3xl text-center my-3'>
                                    Programa Cursado
                                </h3>
                            </div>
                        )
                    } else if (datosAcademicos.length > 1) {
                        return (
                            <div>
                                <hr />
                                <h3 className='text-purple text-3xl text-center my-3'>
                                    Programas Cursados
                                </h3>
                            </div>
                        )
                    }
                })()
            }

            {
                (() => {
                    if (dataStudent.length != 0) {
                        return (
                            <div className='flex justify-center gap-4'>
                                <h3>
                                    Selecciones el programa para ver la información
                                </h3>
                                <form action="">
                                    {
                                        datosAcademicos.map((item, index) => {
                                            let { codPlan, nombrePlan, codFacultad, nombreFacultad } = item
                                            return (
                                                <div key={index}>
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="options-outlined"
                                                        id={codPlan}
                                                        autoComplete="off"
                                                        onClick={() => {
                                                            setCodPlan(codPlan)
                                                        }}
                                                    />
                                                    <label
                                                        className="btn btn-outline-success"
                                                        htmlFor={codPlan}
                                                    >
                                                        {nombrePlan}
                                                    </label>
                                                </div>

                                            )
                                        })
                                    }
                                </form>
                            </div>
                        )
                    }
                })()
            }



        </>
    )
}
export default PrintDataStudent