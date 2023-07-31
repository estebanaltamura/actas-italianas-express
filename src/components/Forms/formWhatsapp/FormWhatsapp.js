import { useRef } from "react";
import { useFormValidator } from "../../../hooks/useFormValidator";
import { usePhoneNumberHandler } from "../../../hooks/usePhoneNumberHandler";
import { useSubmitLeadToFirestore } from "../../../hooks/useSubmitLeadToFirestore";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { TbHelp } from "react-icons/tb";
import "./FormWhatsapp.css";

export const FormWhatsapp = () => {
  const MySwal = withReactContent(Swal);
  const {
    areValidEntries,
    setAlerts,    
    resetAlerts,
    fullNameAlert,
    phoneAlert,
    mailAlert,
  } = useFormValidator();
  const { phoneNumberHandler } = usePhoneNumberHandler()
  const { submitForm } = useSubmitLeadToFirestore()


  const fullNameValueInput = useRef();
  const phoneValueInput = useRef();
  const mailValueInput = useRef();
  const submit = useRef();   

  const inputPhoneHelpClickHandler = () => {
    MySwal.fire({
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "ok",
      html: (
        <div>
          <h4>Formatos aceptados</h4>

          <span>Opcion 1: 1131234561</span>
          <br />
          <span>Opcion 2: (113)-123-4561</span>
          <br />
          <span>Opcion 3: 113-123-4561</span>
          <br />
          <span>Opcion 3: 1131234561</span>
          <br />
          <span>Opcion 4: 02234561234</span>
          <br />
          <span>Opcion 5: (0223)-456-1234</span>
          <br />
          <span>Opcion 6: 0223-456-1234</span>
          <br />
          <br />
          <span>Se permite el uso de parentesis y guiones</span>
        </div>
      ),
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value.toLowerCase();
    const phoneNumber = e.target.phone.value;
    const mail = e.target.mail.value.toLowerCase();

    const phoneNumberHandled = phoneNumberHandler(phoneNumber)

    if(areValidEntries(fullName, phoneNumberHandled, mail)){
      const elements = {
                        "fullNameELement"     : fullNameValueInput.current, 
                        "phoneNumberElement"  : phoneValueInput.current, 
                        "mailElement"         : mailValueInput.current, 
                        "submitButton"        : submit.current}

      submitForm(fullName, phoneNumberHandled, mail, elements)
    }

    else setAlerts(fullName, phoneNumberHandled, mail)    
  };

  return (
    <>
      <div className="formWhatsappContainer">        
          <form className="formFormWhatsapp" action="/action_page.php" onSubmit={onSubmitHandler}>
            <div className="inputContainer">
              <span className="subtitle">NOMBRE:</span>
              <input
                placeholder="Ingrese su nombre completo"
                className="inputformWhatsapp"
                ref={fullNameValueInput}
                autoComplete="off"
                type="text"
                name="fullName"
                onKeyUp={resetAlerts}
              />
              <span className="inputAlerts">{fullNameAlert}</span>
            </div>

            <div className="inputContainer">
              <span className="subtitle">WHATSAPP:</span>
              <input
                placeholder="Ingrese su Whatsapp Ejemplo 113 859 7894"
                className="inputformWhatsapp"
                ref={phoneValueInput}
                autoComplete="off"
                type="number"
                name="phone"
                onKeyUp={resetAlerts}
              />
              <TbHelp
                onClick={inputPhoneHelpClickHandler}
                className="inputPhoneHelp"
              />
              <span className="inputAlerts">{phoneAlert}</span>
            </div>

            <div className="inputContainer">
              <span className="subtitle">MAIL:</span>
              <input
                placeholder="Ingrese su e-mail Ejemplo mail@mail.com"
                className="inputformWhatsapp"
                ref={mailValueInput}
                autoComplete="off"
                type="text"
                name="mail"
                onKeyUp={resetAlerts}
              />
              <span className="inputAlerts">{mailAlert}</span>
            </div>
            <button ref={submit} type="submit" className="chatButtonChatear">
              <img
                className="iconWhatsappChatear"
                src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"
              />
              CHATEA AHORA
            </button>
          </form>        
      </div>
    </>
  );
};
