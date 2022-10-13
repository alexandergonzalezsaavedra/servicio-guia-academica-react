import React, { useEffect, useState } from 'react'

const PlanEstudio = ({ dataToken, estudiante, codPlan, setDatosPlanDeEstudio, setDataSemestres }) => {

    useEffect(() => {
        obtenerPlanEstudios(codPlan)
    }, [codPlan])
    const obtenerPlanEstudios = async (codPlan) => {
        try {
            if (estudiante.length === 0) {
                return
            }
            let HeadersPlanEstudios = new Headers();
            HeadersPlanEstudios.append("Authorization", `Bearer ${dataToken}`);

            let requestPlanDeEstudios = {
                method: 'GET',
                headers: HeadersPlanEstudios,
                redirect: 'follow'
            };
            const res = await fetch(`https://guiaacademicabackend.azurewebsites.net/api/planEstudio?correo=${estudiante}&planEstudio=${codPlan}`, requestPlanDeEstudios);
            if (!res.ok) {
                console.log(res);
                return console.log('No hay información del estudiante');
            }
            const resData = await res.json();
            setDatosPlanDeEstudio(resData.data[0])
            setDataSemestres(resData.data[0].semestres)
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

export default PlanEstudio
