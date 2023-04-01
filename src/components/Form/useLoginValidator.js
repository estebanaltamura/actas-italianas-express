import { useState } from "react"

export const useLoginValidator = (e)=>{
    
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

            //(555)555-5555
            const expresion1 = /.*/
            //555-555-5555
            const expresion2 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
            //1 555-555-5555
            const expresion3 = /^1[0-9]{3}-[0-9]{3}-[0-9]{4}$/
            //1 (555) 555-5555
            const expresion4 = /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
            //15555555555
            const expresion5 = /^1[0-9]{10}$/
            ///5555555555
            const expresion6 = /^[0-9]{10}$/

            return expresion1.test(cadena)
        }

        if (regExpCheck(stringSinEspacios) == false){
         setPhoneAlert("wrong format. Insert a US phone number")
        } 
        else return true        
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