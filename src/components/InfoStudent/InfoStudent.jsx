import React, { useEffect } from 'react'

const InfoStudent = ({ dataToken, estudiante, setDataStudent, setDatosAcademicos }) => {



    useEffect(() => {
        obtenerDatosEstudiante(dataToken)
    }, [dataToken])


    const obtenerDatosEstudiante = async (dataToken) => {
        try {
            if (estudiante.length === 0) {
                return
            }
            let studentHeaders = new Headers();
            studentHeaders.append("Authorization", `Bearer ${dataToken}`);
            let requestOptionsStudent = {
                method: 'GET',
                headers: studentHeaders,
                redirect: 'follow'
            };
            const res = await fetch(`https://guiaacademicabackend.azurewebsites.net/api/estudiante?correo=${estudiante}`, requestOptionsStudent);
            if (!res.ok) {
                console.log(res);
                return console.log('No hay información del estudiante');
            }
            const resData = await res.json();
            setDataStudent(resData.data[0]);
            setDatosAcademicos(resData.data[0].datosAcademicos)
        } catch (error) {
            console.log(error);
            return console.log('');
        } finally {
            console.log('fin de carga')
        }
    };

    return (
        <div>

        </div>
    )
}

export default InfoStudent
