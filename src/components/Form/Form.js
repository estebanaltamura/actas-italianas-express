import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useLoginValidator } from "./useLoginValidator";
import { TbHelp } from "react-icons/tb";


import "./Form.css"

export const Form = ()=>{

    const MySwal = withReactContent(Swal)
    const { fullNameValidator, telephoneValidator,  mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert } = useLoginValidator()
    const fullNameValueInput = useRef()
    const phoneValueInput = useRef()
    const mailValueInput = useRef()
    const submit = useRef()
    const history = useNavigate()


    const inputPhoneHelpClickHandler = ()=>{
        MySwal.fire({
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'ok',
            html: <div>
                      <h4>Formatos aceptados</h4>
                                               
                        <span>Opcion 1: 1131234561</span><br/>
                        <span>Opcion 2: (113)-123-4561</span><br/>
                        <span>Opcion 3: 113-123-4561</span><br/>
                        <span>Opcion 3: 1131234561</span><br/>
                        <span>Opcion 4: 02234561234</span><br/> 
                        <span>Opcion 5: (0223)-456-1234</span><br/>
                        <span>Opcion 6: 0223-456-1234</span><br/><br/>
                        <span>Se permite el uso de parentesis y guiones</span>        
                    </div>            
            })
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        const fullNameValue = e.target.fullName.value
        const phoneValue = e.target.phone.value
        const mailValue = e.target.mail.value

        const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "2-digit", minute: "2-digit"})
        
        const phoneValueHandled = [...phoneValue].filter(element => {
            return (element !== " " && element !== "-" && element !== "(" && element !== ")")  && element
        });

        const indexFirstValidNumber = phoneValueHandled.findIndex(element=> element !== "0")

        const phoneValueHandled2 = "+549" + phoneValueHandled.slice(indexFirstValidNumber).join("")
        console.log(phoneValueHandled2, phoneValueHandled2.length)

        fullNameValidator(fullNameValue)
        telephoneValidator(phoneValueHandled2)
        mailValidator(mailValue)
        
        if (fullNameValidator(fullNameValue) && telephoneValidator(phoneValue) && mailValidator(mailValue)){
        const db = getFirestore()
        const queryCollection = collection(db, "Leads")              
        
        addDoc(queryCollection, {fullname: fullNameValue,  phoneNumber: phoneValueHandled2, email: mailValue, date: date, cumplimentada: false}).then(res=>{
                    fullNameValueInput.current.value = ""
                    phoneValueInput.current.value = ""
                    mailValueInput.current.value = ""
                    submit.current.setAttribute("disabled", "true");
                    history("/graciasPorSuConsulta")
                }).catch(error=>{                     
                    console.log(error)
                    MySwal.fire("No pudimos procesar su orden. Intente nuevamente")
                })    
        }   
          
            
    }
    

    return(
            <>                
                        <div className="loginContainer"> 
                            <div className="form-container"> 
                                <form action="/action_page.php" onSubmit={onSubmitHandler}> 
                                
                                    <div className="inputContainer">
                                        <span className="subtitle">NOMBRE:</span>
                                        <input placeholder="Ingrese su nombre completo" ref={fullNameValueInput} autoComplete="off" type="text" name="fullName" onKeyUp={resetAlerts}/>
                                        <span className="inputAlerts">{fullNameAlert}</span>
                                    </div>

                                    <div className="inputContainer">
                                        <span className="subtitle">WHATSAPP:</span>  
                                        <input placeholder="Ingrese su Whatsapp Ejemplo 113 859 7894" ref={phoneValueInput} autoComplete="off" type="number" name="phone" onKeyUp={resetAlerts}/>
                                        <TbHelp onClick={inputPhoneHelpClickHandler} className="inputPhoneHelp" />
                                        <span className="inputAlerts">{phoneAlert}</span>
                                    </div>
                                    
                                    <div className="inputContainer">
                                        <span className="subtitle">MAIL:</span>  
                                        <input placeholder="Ingrese su e-mail Ejemplo mail@mail.com" ref={mailValueInput} autoComplete="off" type="text" name="mail" onKeyUp={resetAlerts}/>
                                        <span className="inputAlerts">{mailAlert}</span>
                                    </div>
                                    
                                    <button ref={submit} type="submit"  className="submit-btn">ENVIAR</button>
                                </form>
                            </div>  
                        </div>                   
                          
                
            </>
    )
}