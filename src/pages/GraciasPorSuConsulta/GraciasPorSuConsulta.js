import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { BsChevronLeft } from "react-icons/bs";
import "./GraciasPorSuConsulta.css";

export const GraciasPorSuConsulta = () => {
  const { setIsLoading } = useContext(IsLoadingContext)

  const backToHomeHandler = ()=>{
    setIsLoading(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mensajeGraciasContainer">        
        <h4 className="loConactaremosmessage">
          En menos de 24 horas nos contactaremos con usted
        </h4>
        <div className="buttonsContainer">
          <h5 className="ganchoChatMessage">
            Si quiere puede hablar ya mismo con un representante    
          </h5>
          <a
            href="https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad."
            className="chatButton"
            target="_blank">
          
            Chatear ahora
            <img
              className="chatAhoraIcon"
              src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"
            />
          </a>
          <Link to="/home" className="volverButton" onClick={backToHomeHandler}>
            Volver
            <BsChevronLeft className="volverIcon" />
          </Link>
        </div>
      </div>
    </>
  );
};
