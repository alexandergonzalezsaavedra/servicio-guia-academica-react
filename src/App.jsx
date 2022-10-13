import { useEffect, useState } from 'react';
import FormLogin from './components/FormLogin/FormLogin';
import InfoStudent from './components/InfoStudent/InfoStudent';
import PintarPlanEstudios from './components/InfoStudent/PintarPlanEstudios';
import PlanEstudio from './components/InfoStudent/PlanEstudio';
import PrintDataStudent from './components/InfoStudent/PrintDataStudent';
function App() {

  const [estudiante, setEstudiante] = useState('')
  useEffect(() => {
    obtenerToken(estudiante)
  }, [estudiante])

  const [dataToken, setDataToken] = useState('')
  const [dataStudent, setDataStudent] = useState([])
  const [datosAcademicos, setDatosAcademicos] = useState([])
  const [codPlan, setCodPlan] = useState('')
  let [datosPlanDeEstudio, setDatosPlanDeEstudio] = useState()
  const [dataSemestres, setDataSemestres] = useState()

  const obtenerToken = async (estudiante) => {
    try {
      if (estudiante.length === 0) {
        return
      }
      let headerToken = new Headers();
      headerToken.append("Authorization", "Basic YXBpUmVzdENsaWVudElkOlhZN2ttem9OemwxMDA=");
      let requestTokenOption = {
        method: 'POST',
        headers: headerToken,
        redirect: 'follow'
      };
      const res = await fetch(`https://guiaacademicabackend.azurewebsites.net/oauth/token?grant_type=password&username=${estudiante}&password=password`, requestTokenOption);
      if (!res.ok) {
        console.log(res);
        return console.log('No existe el estudiante');
      }
      const data = await res.json();
      setDataToken(data.access_token);
    } catch (error) {
      console.log(error);
      return console.log('');
    } finally {
      console.log('fin de carga')
    }
  };



  return (
    <>
      <div className='container mx-auto pt-3'>
        <h3 className="text-3xl font-bold text-sm text-blue-50 mb-5 text-center">
          Consumo servicio - guia academica
        </h3>
        <div id='formularioIngreso'>
          <FormLogin setEstudiante={setEstudiante} />
        </div>
        <InfoStudent
          dataToken={dataToken}
          estudiante={estudiante}
          setDataStudent={setDataStudent}
          setDatosAcademicos={setDatosAcademicos}

        />
        <PrintDataStudent
          dataStudent={dataStudent}
          datosAcademicos={datosAcademicos}
          setCodPlan={setCodPlan}
        />
        <PlanEstudio
          estudiante={estudiante}
          dataToken={dataToken}
          datosAcademicos={datosAcademicos}
          codPlan={codPlan}
          setDatosPlanDeEstudio={setDatosPlanDeEstudio}
          setDataSemestres={setDataSemestres}
        />
      </div>
      <div className='px-1 pb-5 py-1'>
        <div id='planEstudios'>
          <PintarPlanEstudios
            dataSemestres={dataSemestres}
            codPlan={codPlan}
          />
        </div>
      </div>
    </>
  )
}
export default App