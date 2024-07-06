// ** React Router DOM import
import { useNavigate } from 'react-router-dom';

// ** Hooks import
import { usePopUps } from './usePopUps';

// ** Firebase import
import { getFirestore, setDoc, doc, getDoc, updateDoc, DocumentReference } from 'firebase/firestore';

export const useSubmitLeadToFirestore: () => void = () => {
  const db = getFirestore();
  const history = useNavigate();

  const { submitFormError } = usePopUps();

  const date = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const elementsBehaviorWhenSubmit = (
    fullNameELement: HTMLInputElement,
    phoneNumberElement: HTMLInputElement,
    mailElement: HTMLInputElement,
    submitButton: HTMLButtonElement
  ) => {
    submitButton.setAttribute('disabled', 'true');
    submitButton.style.backgroundColor = '#63BEE6';
    submitButton.textContent = 'ENVIANDO...';
    fullNameELement.value = '';
    phoneNumberElement.value = '';
    mailElement.value = '';
  };

  const elementsBehaviorWhenSubmitIsuccessful = (submitButton: HTMLButtonElement) => {
    submitButton.removeAttribute('disabled');
    submitButton.style.backgroundColor = '#384d56';
    submitButton.textContent = 'ENVIADO!';
  };

  const getLastLeadIdNumber: () => Promise<number | undefined> = async () => {
    const queryDoc = doc(db, 'UltimoNumeroDeContacto', 'E9mEVykIO4N7719I6dh3');
    try {
      const lastLeadIdNumberesponse = await getDoc(queryDoc);
      const lastLeadIdNumber = lastLeadIdNumberesponse.data()?.ultimoNumero;

      if (typeof lastLeadIdNumber !== 'number') {
        throw new Error('Error trying to get last lead id number');
      }

      return lastLeadIdNumber;
    } catch (error) {
      console.log(error);
    }
  };

  const updateLastLeadIdNumberInFirestore: (lastLeadIdNumber: number) => Promise<number> = async (lastLeadIdNumber) => {
    const queryDoc = doc(db, 'UltimoNumeroDeContacto', 'E9mEVykIO4N7719I6dh3');
    const lastLeadIdNumberPlusOne = lastLeadIdNumber + 1;
    await updateDoc(queryDoc, { ultimoNumero: lastLeadIdNumberPlusOne });

    return lastLeadIdNumberPlusOne;
  };

  const createDocument: (lastLeadIdNumberPlusOne: number, fullName: string) => DocumentReference = (
    lastLeadIdNumberPlusOne,
    fullName
  ) => {
    const docRef = doc(db, 'LeadsParaAgendar', `${lastLeadIdNumberPlusOne} - ${fullName}`);

    return docRef;
  };

  const setDocument = (
    docRef: DocumentReference,
    lastLeadIdNumberPlusOne: number,
    date: string,
    fullName: string,
    phoneNumberHandled: string,
    mail: string,
    submitButton: HTMLButtonElement,
    section: string
  ): void => {
    setDoc(docRef, {
      fullname: `${lastLeadIdNumberPlusOne} - ${fullName}`,
      phoneNumber: phoneNumberHandled,
      email: mail,
      date: date,
      cumplimentada: false,
    })
      .then(() => {
        if (section === 'home') {
          history('/graciasPorSuConsulta');
        }
        if (section === 'chatearConUnOperador') {
          const timeOut = setTimeout(() => {
            history('/home');
            clearTimeout(timeOut);
          }, 3000);

          window.open(
            'https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad.',
            '_blank'
          );
        }
      })
      .catch((error) => {
        console.log(error);
        submitButton.setAttribute('disabled', 'false');
        submitButton.style.backgroundColor = '#384d56';
        submitButton.textContent = 'CHATEA AHORA';
        submitFormError();
      });
  };

  //
  const submitForm = async (
    fullName: string,
    phoneNumberHandled: string,
    mail: string,
    elements: {
      fullNameELement: HTMLInputElement;
      phoneNumberElement: HTMLInputElement;
      mailElement: HTMLInputElement;
      submitButton: HTMLButtonElement;
    },
    section: string
  ) => {
    const { fullNameELement, phoneNumberElement, mailElement, submitButton } = elements;
    elementsBehaviorWhenSubmit(fullNameELement, phoneNumberElement, mailElement, submitButton);
    try {
      const lastLeadIdNumber = await getLastLeadIdNumber();

      if (!lastLeadIdNumber) throw new Error('Error trying to get last lead id number');
      const lastLeadIdNumberPlusOne = await updateLastLeadIdNumberInFirestore(lastLeadIdNumber);

      const docRef = createDocument(lastLeadIdNumberPlusOne, fullName);

      setDocument(docRef, lastLeadIdNumberPlusOne, date, fullName, phoneNumberHandled, mail, submitButton, section);

      elementsBehaviorWhenSubmitIsuccessful(submitButton);

      const timeOut = setTimeout(() => {
        submitButton.textContent = 'ENVIAR';
        clearTimeout(timeOut);
      }, 1500);
    } catch (error) {}
  };

  return {
    submitForm,
  };
};
