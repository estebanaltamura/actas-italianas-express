import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "./Footer.css";

export const Footer = () => {
  return ( 
    <footer>
      <p className="contactenosTitulo">CONTACTANOS Y SEGUINOS EN REDES</p>

      <div className="footerGrid">
        <MdAlternateEmail className="iconFooter" />
        <p className="messageFooter">actasitalianaexpress@gmail.com</p>
        <BsInstagram className="iconFooter" />
        <a
          className="messageFooter"
          href="https://www.instagram.com/actasitalianasexpress/"
          target="_blank"
        >
          @actasitalianasexpress
        </a>
      </div>
    </footer>
  );
};
