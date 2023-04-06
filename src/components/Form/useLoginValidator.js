import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const useLoginValidator = (e)=>{

    const MySwal = withReactContent(Swal)
    
    const [fullNameAlert, setFullNameAlert] = useState("")
    const [mailAlert, setMailAlert] = useState("")
    const [phoneAlert, setPhoneAlert] = useState("")
    
    const fullNameValidator = (fullName)=>{
        const digitRegExp = /\d/
        if(digitRegExp.test(fullName)){
            setFullNameAlert("Solo ingrese letras. Numeros no permitidos")
        } 

        const isThereTwoWords = /\w+\s*\w+/
        if(!isThereTwoWords.test(fullName)){
            setFullNameAlert("Por favor inserte nombre completo")
        } 

        else return true
    }
    
    const telephoneValidator = (str)=> {
        const stringSinEspacios = str.replaceAll(" ", "")

        const regExpCheck = (cadena)=>{
            
            const digitRegExpVacia = /^$/
            const digitRegExpNumerosGuiones = /^[\d-]*$/
            const digitRegExpComienza = /^\d/
            const digitRegExpTermina = /\d+$/
            const digitRegExpGuiones = /--/
            
            
            
            if(digitRegExpVacia.test(cadena)){
                setPhoneAlert("Ingrese un numero de whatsapp")
                return false
            } 

            if(!digitRegExpNumerosGuiones.test(cadena)){
                setPhoneAlert("Solo numeros y/o guiones")
                return false
            } 
            
            if(!digitRegExpComienza.test(cadena)){
                setPhoneAlert("Debe comenzar con un numero")
                return false
            } 
            
            if(!digitRegExpTermina.test(cadena)){
                setPhoneAlert("Debe terminar con un numero")
                return false
            } 

            if(digitRegExpGuiones.test(cadena)){
                setPhoneAlert("No debe haber dos guiones juntos")
                return false
            } 

            if(cadena.length > 10){
                 setPhoneAlert("Ingreso numeros de mas")
                 MySwal.fire({
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'ok',
                    html: <div>
                        <h4>Formatos aceptados</h4><br/>
                        <span>Opcion 1: 113-123-4561</span><br/>
                        <span>Opcion 2: (113)-123-4561</span><br/>
                        <span>Opcion 3: 1131234561</span><br/>
                        <span>Opcion 4: 02234561234</span><br/> 
                        <span>Opcion 5: (0223)-456-1234</span><br/>
                        <span>Opcion 6: 0223-456-1234</span><br/><br/>
                        <span>Se permite el uso de parentesis y guiones</span>        
                    </div>            
                })
                 return false
            }

            if(cadena.length < 10){
                setPhoneAlert("Ingreso numeros de menos")
                MySwal.fire({
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'ok',
                    html: <div>
                        <h4>Formatos aceptados</h4><br/>
                        <span>Opcion 1: 113-123-4561</span><br/>
                        <span>Opcion 2: 1131234561</span><br/>
                        <span>Opcion 3: 02234561234</span><br/> 
                        <span>Opcion 4: 0223-456-1234</span><br/><br/>
                        <span>Se permite el uso de parentesis y guiones</span>        
                    </div>            
                })
                return false
           }

        }

        
        if (regExpCheck(stringSinEspacios) !== false){
            return true 
        }                 
    }
    
    
    const mailValidator = (mail)=>{
        if (mail == ""){
            setMailAlert("Ingrese un mail valido, ejemplo: mail@mail.com"); 
            return            
        } 
        
        const twoDotsRegExp = /\.{2,}/
        if(twoDotsRegExp.test(mail)){
            setMailAlert("No se permiten dos puntos (..) consecutivos") 
            return           
        }  
        
        const dotAtStart = /^\.{1}/
        const dotAtEnd = /\.{1}@{1}/
        if(dotAtStart.test(mail) || dotAtEnd.test(mail)){
            setMailAlert("La direccion de mail no puede empezar ni terminar con un punto (.)") 
            return           
        }  
        
        const multiplesAt = /@.*@/
        if(multiplesAt.test(mail)){
            setMailAlert("No esta permitido mas de un arroba (@)")     
            return       
        }  
        
        const regExpmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        if(!regExpmail.test(mail)){
            setMailAlert("Ingrese un mail valido, ejemplo: mail@mail.com")
            return 
        } 
        return true
    }

        
    const resetAlerts = ()=>{
        setFullNameAlert("");
        setPhoneAlert("");
        setMailAlert("");        
    }
        
        
        
return {fullNameValidator, telephoneValidator, mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert }
}