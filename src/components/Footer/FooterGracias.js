import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";




import "./FooterGracias.css"


export const FooterGracias = ()=>{
    return(
        <div className="footerContainerGracias">
            <p className="contactenosTitulo">CONTACTANOS Y SEGUINOS EN REDES</p>

            <div className="footerGrid">
                
                <MdAlternateEmail className="iconFooter" />
                <p className="messageFooter">actasitalianaexpress@gmail.com</p>
                <BsInstagram className="iconFooter" />
                <a className="messageFooter" href="https://www.instagram.com/actasitalianasexpress/">@actasitalianasexpress</a>
            </div>
        </div>
    )
}