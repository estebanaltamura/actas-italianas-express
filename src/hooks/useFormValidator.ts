// ** React import
import { useState } from 'react';

export const useFormValidator = () => {
  const [fullNameAlert, setFullNameAlert] = useState('');
  const [mailAlert, setMailAlert] = useState('');
  const [phoneAlert, setPhoneAlert] = useState('');

  const isValidFullNameEntry = (fullName: string) => {
    const digitRegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/g;
    if (!digitRegExp.test(fullName)) {
      return false;
    }

    if (fullName === '') {
      return false;
    }

    return true;
  };

  const isValidPhoneNumberEntry = (phoneNumber: string) => {
    const digitRegExpVacia = /^$/;

    if (digitRegExpVacia.test(phoneNumber)) {
      return false;
    }

    if (phoneNumber.length > 14) {
      return false;
    }

    if (phoneNumber.length < 14) {
      return false;
    }

    return true;
  };

  const isValidEMailEntry = (mail: string) => {
    if (mail === '') {
      return false;
    }

    const acentos = /[áéíóúÁÉÍÓÚñÑ]+/;
    if (acentos.test(mail)) {
      return false;
    }

    const twoDotsRegExp = /\.{2,}/;
    if (twoDotsRegExp.test(mail)) {
      return false;
    }

    const dotAtStart = /^\.{1}/;
    const dotAtEnd = /\.{1}@{1}/;
    if (dotAtStart.test(mail) || dotAtEnd.test(mail)) {
      return false;
    }

    const multiplesAt = /@.*@/;
    if (multiplesAt.test(mail)) {
      return false;
    }

    const regExpmail =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    if (!regExpmail.test(mail)) {
      return false;
    }

    return true;
  };

  const fullNameAlerts = (fullName: string) => {
    const digitRegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/g;
    if (!digitRegExp.test(fullName)) {
      setFullNameAlert('Numeros y caracteres especiales no estan permitidos');

      return;
    }

    if (fullName === '') {
      setFullNameAlert('Ingrese su nombre');

      return;
    }
  };

  const phoneNumberAlerts = (phoneNumber: string) => {
    const digitRegExpVacia = /^$/;

    if (digitRegExpVacia.test(phoneNumber)) {
      setPhoneAlert('Ingrese un numero de whatsapp');

      return false;
    }

    if (phoneNumber.length > 14) {
      setPhoneAlert('Ingreso numeros de mas');

      return false;
    }

    if (phoneNumber.length < 14) {
      setPhoneAlert('Ingreso numeros de menos');

      return false;
    }

    return true;
  };

  const mailAlerts = (mail: string) => {
    if (mail === '') {
      setMailAlert('Ingrese un mail valido, ejemplo: mail@mail.com');

      return;
    }

    const acentos = /[áéíóúÁÉÍÓÚñÑ]+/;
    if (acentos.test(mail)) {
      setMailAlert('No se permiten acentos ni la letra Ñ');

      return;
    }

    const twoDotsRegExp = /\.{2,}/;
    if (twoDotsRegExp.test(mail)) {
      setMailAlert('No se permiten dos puntos (..) consecutivos');

      return;
    }

    const dotAtStart = /^\.{1}/;
    const dotAtEnd = /\.{1}@{1}/;
    if (dotAtStart.test(mail) || dotAtEnd.test(mail)) {
      setMailAlert('La direccion de mail no puede empezar ni terminar con un punto (.)');

      return;
    }

    const multiplesAt = /@.*@/;
    if (multiplesAt.test(mail)) {
      setMailAlert('No esta permitido mas de un arroba (@)');

      return;
    }

    const regExpmail =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    if (!regExpmail.test(mail)) {
      setMailAlert('Ingrese un mail valido, ejemplo: mail@mail.com');

      return;
    }

    return true;
  };

  const areValidEntries = (fullName: string, phoneNumber: string, mail: string) => {
    if (isValidFullNameEntry(fullName) && isValidPhoneNumberEntry(phoneNumber) && isValidEMailEntry(mail)) return true;
    else return false;
  };

  const setAlerts = (fullName: string, phoneNumber: string, mail: string) => {
    fullNameAlerts(fullName);
    phoneNumberAlerts(phoneNumber);
    mailAlerts(mail);
  };

  const resetAlerts = () => {
    setFullNameAlert('');
    setPhoneAlert('');
    setMailAlert('');
  };

  return {
    areValidEntries,
    setAlerts,
    resetAlerts,
    fullNameAlert,
    phoneAlert,
    mailAlert,
  };
};
