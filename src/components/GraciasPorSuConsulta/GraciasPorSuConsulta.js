import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs";
import { Header } from "../Header/Header"; 
import "./GraciasPorSuConsulta.css"

export const GraciasPorSuConsulta = ()=> {

    const history = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{history("/")},135500)
    },[])

    return(
        <>
            <Header />
            <div className="mensajeGraciasContainer">
                <div className="buttonsContainer">

                    <button className="chatButton">
                        Chatear ahora
                        <img className="chatAhoraIcon" src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"/>
                    </button>
                    <button className="volverButton">
                        Volver
                        <BsChevronLeft className="volverIcon" />
                    </button>
                </div>
            </div>
        </>
    )
}