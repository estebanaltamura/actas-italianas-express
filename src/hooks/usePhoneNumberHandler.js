export const usePhoneNumberHandler = ()=>{
  
  const removeEverithingLessDigits = (phoneNumber)=>{       
    const phoneNumberOnlyDigits = [...phoneNumber].filter((element) => {
      return (/\d/.test(element) && element !== " ") && element
    });
  
    const phoneNumberOnlyDigitsString = phoneNumberOnlyDigits.join("")        
    return phoneNumberOnlyDigitsString
  }
  
  const removePrefix = (phoneNumberOnlyDigits)=>{
    if (/^549/.test(phoneNumberOnlyDigits)) {
      return phoneNumberOnlyDigits.slice(3);
        
    
    } else if (/^54/.test(phoneNumberOnlyDigits)) {
      return phoneNumberOnlyDigits.slice(2);
    } else if (/^9/.test(phoneNumberOnlyDigits)) {
      return phoneNumberOnlyDigits.slice(1);
       
    }
    else return phoneNumberOnlyDigits;      
  }
  
  const removeLeftZeros = (phoneNumber)=>{       
    const phoneNumberArray = phoneNumber.split("")
    const firstDigitNoZeroIndex = phoneNumberArray.findIndex((digit)=>Number(digit) > 0)
    const leftZerosDigitsRemoved = phoneNumberArray.slice(firstDigitNoZeroIndex)  
    const leftZerosDigitsRemovedString = leftZerosDigitsRemoved.join("")
    return leftZerosDigitsRemovedString
  }
  

  const phoneNumberHandler = (phoneNumber)=>{
    const phoneNumberOnlyDigits = removeEverithingLessDigits(phoneNumber)  
    const leftZerosDigitsRemoved = removeLeftZeros(phoneNumberOnlyDigits)  
    const phoneNumberprefixRemoved = removePrefix(leftZerosDigitsRemoved)
    const phoneNumberHandled = removeLeftZeros(phoneNumberprefixRemoved)     
    const phoneValueHandledWithPrefix =  "+549" + phoneNumberHandled;
    return phoneValueHandledWithPrefix
  }

  return({
    phoneNumberHandler
  })
}

