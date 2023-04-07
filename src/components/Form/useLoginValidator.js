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
            return false
        } 

        const isThereTwoWords = /\w+\s*\w+/
        if(!isThereTwoWords.test(fullName)){
            setFullNameAlert("Por favor inserte nombre completo")
            return false
        } 

        return true
    }
    
    const telephoneValidator = (cadena)=> {
        console.log(cadena)
        const digitRegExpVacia = /^$/
        const digitRegExpNumerosGuiones = /^[\d-()+]*$/
        //const digitRegExpComienza = /^\d/
        //const digitRegExpTermina = /\d+$/
        //const digitRegExpGuiones = /--/
            
        if(digitRegExpVacia.test(cadena)){
            setPhoneAlert("Ingrese un numero de whatsapp")
            return false
        } 

        if(!digitRegExpNumerosGuiones.test(cadena)){
            console.log(cadena)
            setPhoneAlert("Solo numeros, guiones y/o parantesis")
            return false
        } 
            
            
        if(cadena.length > 14){
            setPhoneAlert("Ingreso numeros de mas")            
        return false
        }

           
        if(cadena.length < 14){
            setPhoneAlert("Ingreso numeros de menos")            
        return false
        }   
        
        return true
        
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