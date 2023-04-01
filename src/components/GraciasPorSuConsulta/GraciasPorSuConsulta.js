import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./GraciasPorSuConsulta.css"

export const GraciasPorSuConsulta = ()=> {

    const history = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{history("/")},2500)
    },[])

    return(
        <div className="mensajeGraciasContainer">
            <h1 className="mensajeGracias">Gracias por su consulta. En maximo 24 horas horas nos pondremos en contacto</h1>
        </div>
    )
}