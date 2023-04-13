import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useLoginValidator } from "./useLoginValidator";
import { TbHelp } from "react-icons/tb";
import { isLoadingContext } from "../../Contexts/IsLoadingContext";


import "./Form.css"

export const Form = ()=>{

    const MySwal = withReactContent(Swal)
    const { fullNameValidator, telephoneValidator,  mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert } = useLoginValidator()
    const fullNameValueInput = useRef()
    const phoneValueInput = useRef()
    const mailValueInput = useRef()
    const submit = useRef()
    const history = useNavigate()
    const {isLoading, setIsLoading} = useContext(isLoadingContext)


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

    const onSubmitHandler = async(e)=>{
        e.preventDefault()

        const fullNameValue = e.target.fullName.value
        const phoneValue = e.target.phone.value
        const mailValue = e.target.mail.value

        const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "2-digit", minute: "2-digit"})
        
        const phoneValueHandled = [...phoneValue].filter(element => {
            return (/\d/.test(element) && element !== " ")  && element
        });

        
        let indexFirstValidNumber1
        let indexFirstValidNumber2

        
        if (/^549/.test(phoneValueHandled.join(""))){
            indexFirstValidNumber1 = 3
        }
        else if (/^54/.test(phoneValueHandled.join(""))){
            indexFirstValidNumber1 = 2
        }
        else if (/^9/.test(phoneValueHandled.join(""))){
            indexFirstValidNumber1 = 1
        }

        const phoneValueHandled2 = phoneValueHandled.slice(indexFirstValidNumber1)

        if (/^0/.test(phoneValueHandled2.join(""))){
            indexFirstValidNumber2 = phoneValueHandled2.findIndex(element=> element !== "0")
        }
        
        console.log(phoneValueHandled)
        console.log(phoneValueHandled2)
        const phoneValueHandled3 = "+549" + phoneValueHandled2.slice(indexFirstValidNumber2).join("")
        console.log(phoneValueHandled3)
        const mailValue2 = [...mailValue].filter(element => {
            return element !== " " && element
        });

        const mailValue3 = mailValue2.join("")

        fullNameValidator(fullNameValue)
        telephoneValidator(phoneValueHandled3)
        mailValidator(mailValue3)
        
        if (fullNameValidator(fullNameValue) && telephoneValidator(phoneValueHandled2) && mailValidator(mailValue)){
        //setIsLoading(true)
        const db = getFirestore()
        
        const queryDoc = doc(db, "UltimoNumeroDeContacto", "E9mEVykIO4N7719I6dh3")
        const ultimoNumeroDeContacto1 = await getDoc(queryDoc)
        const ultimoNumeroDeContacto2 = ultimoNumeroDeContacto1.data().ultimoNumero
        const ultimoNumeroMasUno = ultimoNumeroDeContacto2 + 1
        await updateDoc(queryDoc, {ultimoNumero: ultimoNumeroMasUno})             
        
        const docRef = doc(db, "LeadsParaAgendar", `${ultimoNumeroMasUno} - ${fullNameValue}`)

        setDoc(docRef, {fullname: `${ultimoNumeroMasUno} - ${fullNameValue}`,  phoneNumber: phoneValueHandled2, email: mailValue, date: date, cumplimentada: false}).then(res=>{        
                    fullNameValueInput.current.value = ""
                    phoneValueInput.current.value = ""
                    mailValueInput.current.value = ""
                    submit.current.setAttribute("disabled", "true");                    
                    //setIsLoading(false)
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