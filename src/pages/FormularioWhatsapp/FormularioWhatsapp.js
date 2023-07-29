import "./FormularioWhatsapp.css";
import { FormWhatsapp } from "../../components/Forms/formWhatsapp/FormWhatsapp";

import { Header } from "../../components/Header/Header";
import { useEffect } from "react";

export const FormularioWhatsapp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="formularioWhatsappContainer">
        <Header />
        <h4 className="chatearPageMessage">
          Ingresa tu informacion de contacto para iniciar la asesoria gratis por
          whatsapp
        </h4>
        <FormWhatsapp />
      </div>
    </>
  );
};

/*            <Link to=/></Link>
 */
