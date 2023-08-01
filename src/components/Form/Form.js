import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useFormValidator } from "../../hooks/useFormValidator";
import { usePhoneNumberHandler } from "../../hooks/usePhoneNumberHandler";
import { useSubmitLeadToFirestore } from "../../hooks/useSubmitLeadToFirestore";
import { usePopUps } from "../../hooks/usePopUps";
import { TbHelp } from "react-icons/tb";
import "./Form.css";

export const Form = () => {
  const {
    areValidEntries,
    setAlerts,
    resetAlerts,
    fullNameAlert,
    phoneAlert,
    mailAlert,
  } = useFormValidator();
  const { phoneNumberHandler } = usePhoneNumberHandler();
  const { submitForm } = useSubmitLeadToFirestore();
  const { phoneNumberFormHelperPopUp } = usePopUps();

  const [ section, setSection ] = useState(null)

  const fullNameValueInput = useRef();
  const phoneValueInput = useRef();
  const mailValueInput = useRef();
  const submit = useRef();

  const url = useLocation();

  const inputPhoneHelpClickHandler = () => {
    phoneNumberFormHelperPopUp();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value.toLowerCase();
    const phoneNumber = e.target.phone.value;
    const mail = e.target.mail.value.toLowerCase(); 

    const phoneNumberHandled = phoneNumberHandler(phoneNumber);

    if (areValidEntries(fullName, phoneNumberHandled, mail)) {
      const elements = {
        fullNameELement: fullNameValueInput.current,
        phoneNumberElement: phoneValueInput.current,
        mailElement: mailValueInput.current,
        submitButton: submit.current,
      };
      
      submitForm(fullName, phoneNumberHandled, mail, elements, section);    
    } else setAlerts(fullName, phoneNumberHandled, mail);
  };

  useEffect(()=>{
    const urlInParts = url.pathname.split("/")
    const section = urlInParts[1]
    setSection(section)
  },[url])

  return (
    <>
      <div className="formWhatsappContainer">
        <form
          className="formFormWhatsapp"
          action="/action_page.php"
          onSubmit={onSubmitHandler}
        >
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
          <button ref={submit} type="submit" className={section === "chatearConUnOperador" ? "chatButtonChatear" : "submitButtonFormHome"}>
            {
              section === "chatearConUnOperador" &&
                <img
                  className="iconWhatsappChatear"
                  src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"
                />
            }            
            CHATEA AHORA
          </button>
        </form>
      </div>
    </>
  );
};
