import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useRef } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useLoginValidator } from "./useLoginValidator";

import "./Form.css"

export const Form = ()=>{

    const MySwal = withReactContent(Swal)
    const { fullNameValidator, telephoneValidator,  mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert } = useLoginValidator()
    const fullNameValueInput = useRef()
    const phoneValueInput = useRef()
    const mailValueInput = useRef()

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        const fullNameValue = e.target.fullName.value
        const phoneValue = e.target.phone.value
        const mailValue = e.target.mail.value
        
        fullNameValidator(fullNameValue)
        telephoneValidator(phoneValue)
        mailValidator(mailValue)
        
        if (fullNameValidator(fullNameValue) && mailValidator(mailValue)){
        const db = getFirestore()
        const queryCollection = collection(db, "Leads")              
        
        addDoc(queryCollection, {fullname: fullNameValue,  phoneNumber: phoneValue, email: mailValue, cumplimentada: false}).then(res=>{
                    fullNameValueInput.current.value = ""
                    phoneValueInput.current.value = ""
                    mailValueInput.current.value = ""
                    MySwal.fire("Envio exitoso. En maximo 24 horas nos estaremos comunicando con usted")
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
                                        <input ref={fullNameValueInput} autoComplete="off" type="text" name="fullName" onKeyUp={resetAlerts}/>
                                        <span className="inputAlerts">{fullNameAlert}</span>
                                    </div>

                                    <div className="inputContainer">
                                        <span className="subtitle">TELEFONO:</span>  
                                        <input ref={phoneValueInput} autoComplete="off" type="text" name="phone" onKeyUp={resetAlerts}/>
                                        
                                        <span className="inputAlerts">{phoneAlert}</span>
                                    </div>
                                    
                                    <div className="inputContainer">
                                        <span className="subtitle">MAIL:</span>  
                                        <input ref={mailValueInput} autoComplete="off" type="text" name="mail" onKeyUp={resetAlerts}/>
                                        <span className="inputAlerts">{mailAlert}</span>
                                    </div>
                                    
                                    <button type="submit"  className="submit-btn">ENVIAR</button>
                                </form>
                            </div>  
                        </div>                   
                          
                
            </>
    )
}