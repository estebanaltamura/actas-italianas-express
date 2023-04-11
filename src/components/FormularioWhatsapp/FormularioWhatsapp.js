import "./FormularioWhatsapp.css"
import { FormWhatsapp } from "../Form/FormWhatsapp"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const FormularioWhatsapp = ()=>{
    return(
        <>
            <div className="formularioWhatsappContainer">
                <Header />
                <h4 className="chatearPageMessage">Ingresa tu informacion de contacto para iniciar la asesoria gratis por whatsapp</h4>
                <FormWhatsapp />
            </div>
            <Footer />
        </>
    )
}

/*            <Link to=/></Link>
*/