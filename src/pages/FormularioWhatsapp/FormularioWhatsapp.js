import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { FormWhatsapp } from "../../components/Forms/formWhatsapp/FormWhatsapp";
import { BsChevronLeft } from "react-icons/bs";
import "./FormularioWhatsapp.css";

export const FormularioWhatsapp = () => {
  const { setIsLoading } = useContext(IsLoadingContext)

  const backToHomeHandler = ()=>{
    setIsLoading(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="formularioWhatsappContainer">        
        <h4 className="chatearPageMessage">
          Ingresa tu informacion de contacto para iniciar la asesoria gratis por
          whatsapp
        </h4>
        <FormWhatsapp />
        <Link to="/home" className="volverButton" onClick={backToHomeHandler}>
            Volver
            <BsChevronLeft className="volverIcon" />
        </Link>
      </div>
    </>
  );
};

