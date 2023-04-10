import "./FormularioWhatsapp.css"
import { FormWhatsapp } from "../Form/FormWhatsapp"
import { FooterGracias } from "../Footer/FooterGracias"
import { Header } from "../Header/Header"

export const FormularioWhatsapp = ()=>{
    return(
        <>
            <div className="formularioWhatsappContainer">
                <Header />
                <h4 className="chatearPageMessage">Ingresa tu informacion de contacto para iniciar la asesoria gratis por whatsapp</h4>
                <FormWhatsapp />
            </div>
            <FooterGracias />
        </>
    )
}

/*            <Link to=/></Link>
*/