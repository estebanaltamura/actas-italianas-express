import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { Header } from "../Header/Header"; 
import { FooterGracias } from "../Footer/FooterGracias";
import "./GraciasPorSuConsulta.css";

export const GraciasPorSuConsulta = ()=> {

    return(
        <>
            
            <div className="mensajeGraciasContainer">
            <Header />
                <h4 className="loConactaremosmessage">En menos de 24 horas nos contactaremos con usted</h4>
                
                <div className="buttonsContainer">
                    <h5 className="ganchoChatMessage">Si quiere puede hablar ya mismo con un representante</h5>
                    <Link to="https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad." className="chatButton">
                        Chatear ahora
                        <img className="chatAhoraIcon" src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"/>
                    </Link>
                    <Link to="/home" className="volverButton">
                        Volver
                        <BsChevronLeft className="volverIcon" />
                    </Link>
                </div>
            <FooterGracias />
            </div>
            
            
        </>
    )
}