import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { Form } from "../../components/Form/Form";
import { BsChevronLeft } from "react-icons/bs";
import "./ChatearConUnOperador.css";

export const ChatearConUnOperador = () => {
  const { setIsLoading } = useContext(IsLoadingContext)

  const backToHomeHandler = ()=>{
    setIsLoading(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false)
  }, []);

  return (
    <>
      <div className="chatearConUnOperadorContainer">        
        <h4 className="chatearPageMessage">
          Ingresa tu informacion de contacto para iniciar la asesoria gratis por
          whatsapp
        </h4>
        <Form />
        <Link to="/home" className="volverButtonChatearConUnOperador" onClick={backToHomeHandler}>
            Volver
            <BsChevronLeft className="volverIconChatearConUnOperador" />
        </Link>
      </div>
    </>
  );
};