import { useNavigate } from "react-router-dom";
import { usePopUps } from "./usePopUps";
import {
  getFirestore,  
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";


export const useSubmitLeadToFirestore = ()=>{
  const db = getFirestore();  
  const history = useNavigate()

  const { submitFormError } = usePopUps()
  
  const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });   

    const elementsBehaviorWhenSubmit = (fullNameELement, phoneNumberElement, mailElement, submitButton)=>{
      submitButton.setAttribute("disabled", "true");
      submitButton.style.backgroundColor = "#63BEE6";
      submitButton.textContent = "ENVIANDO...";      
      fullNameELement.value = "";
      phoneNumberElement.value = "";
      mailElement.value = "";      
    }

    const getLastLeadIdNumber = async()=>{
      const queryDoc = doc(
        db,
        "UltimoNumeroDeContacto",
        "E9mEVykIO4N7719I6dh3"
      );
      const lastLeadIdNumberesponse = await getDoc(queryDoc);
      const lastLeadIdNumber = lastLeadIdNumberesponse.data().ultimoNumero;
      return lastLeadIdNumber
    }

    const updateLastLeadIdNumberInFirestore = async(lastLeadIdNumber)=>{
      const queryDoc = doc(
        db,
        "UltimoNumeroDeContacto",
        "E9mEVykIO4N7719I6dh3"
      );
      const lastLeadIdNumberPlusOne = lastLeadIdNumber + 1;
      await updateDoc(queryDoc, { ultimoNumero: lastLeadIdNumberPlusOne });
      return lastLeadIdNumberPlusOne
    }

    const createDocument = (lastLeadIdNumberPlusOne, fullName)=>{
      const docRef = doc(
        db,
        "LeadsParaAgendar",
        `${lastLeadIdNumberPlusOne} - ${fullName}`
      );

      return docRef
    }

    const setDocument = (docRef, lastLeadIdNumberPlusOne, date, fullName, phoneNumberHandled, mail, submitButton, section)=>{      
      setDoc(docRef, {
      fullname: `${lastLeadIdNumberPlusOne} - ${fullName}`,
      phoneNumber: phoneNumberHandled,
      email: mail,
      date: date,
      cumplimentada: false,
      })
      .then(() => {         
        if(section === "home"){
          history('/graciasPorSuConsulta') 
        } 
        if(section === "chatearConUnOperador"){
          const timeOut = setTimeout(()=>{
            history('/home') 
            clearTimeout(timeOut)
          }, 3000)
  
          window.open('https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad.', '_blank' )
        }                    
      })
      .catch((error) => {
        console.log(error);
        submitButton.setAttribute("disabled", "false");
        submitButton.style.backgroundColor = "#384d56";
        submitButton.textContent = "CHATEA AHORA";      
        submitFormError();
      });
    }

    const submitForm = async(fullName, phoneNumberHandled, mail, elements, section)=>{      
      const { fullNameELement, phoneNumberElement, mailElement, submitButton } = elements       
      elementsBehaviorWhenSubmit(fullNameELement, phoneNumberElement, mailElement, submitButton)      
      const lastLeadIdNumber = await getLastLeadIdNumber()
      const lastLeadIdNumberPlusOne = await updateLastLeadIdNumberInFirestore(lastLeadIdNumber)
      const docRef = createDocument(lastLeadIdNumberPlusOne, fullName)
      setDocument(docRef, lastLeadIdNumberPlusOne, date, fullName, phoneNumberHandled, mail, submitButton, section)      
    }   

  return({
    submitForm
  })
}