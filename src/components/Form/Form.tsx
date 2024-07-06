// ** React import
import { useRef } from 'react';

// ** Hooks import
import { useFormValidator } from '../../hooks/useFormValidator';
import { usePhoneNumberHandler } from '../../hooks/usePhoneNumberHandler';
import { usePopUps } from '../../hooks/usePopUps';
import { useSubmitLeadToFirestore } from '../../hooks/useSubmitLeadToFirestore';

// ** Material UI import
import { Box, Button, FormControl, Typography } from '@mui/material';

// ** Icons import
import { TbHelp } from 'react-icons/tb';

export const Form: React.FC = () => {
  const { pathname } = window.location;

  const { areValidEntries, setAlerts, resetAlerts, fullNameAlert, phoneAlert, mailAlert } = useFormValidator();
  const { phoneNumberHandler } = usePhoneNumberHandler();
  const { submitForm } = useSubmitLeadToFirestore();
  const { phoneNumberFormHelperPopUp } = usePopUps();

  const fullNameValueInput = useRef<HTMLInputElement>(null);
  const phoneValueInput = useRef<HTMLInputElement>(null);
  const mailValueInput = useRef<HTMLInputElement>(null);
  const submit = useRef<HTMLButtonElement>(null);

  const section = pathname.split('/')[1];

  const inputPhoneHelpClickHandler = () => {
    phoneNumberFormHelperPopUp();
  };

  const onSubmitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      fullName: { value: string };
      phone: { value: string };
      mail: { value: string };
    };

    const fullName = target.fullName.value.toLowerCase();
    const phoneNumber = target.phone.value;
    const mail = target.mail.value.toLowerCase();
    const phoneNumberHandled = phoneNumberHandler(phoneNumber);

    if (areValidEntries(fullName, phoneNumberHandled, mail)) {
      const elements = {
        fullNameELement: fullNameValueInput.current as HTMLInputElement,
        phoneNumberElement: phoneValueInput.current as HTMLInputElement,
        mailElement: mailValueInput.current as HTMLInputElement,
        submitButton: submit.current as HTMLButtonElement,
      };

      submitForm(fullName, phoneNumberHandled, mail, elements, section as string);
    } else setAlerts(fullName, phoneNumberHandled, mail);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '620px',
        height: 'fitContent',
        padding: '20px 40px 20px 40px',
        background: 'white',
        margin: '0 auto',
      }}
    >
      <FormControl
        component={'form'}
        sx={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        onSubmit={onSubmitHandler}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '90px' }}>
          <Typography sx={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'black', marginBottom: '5px' }}>
            NOMBRE:
          </Typography>
          <input
            placeholder='Ingrese su nombre completo'
            ref={fullNameValueInput}
            autoComplete='off'
            type='text'
            name='fullName'
            onKeyUp={resetAlerts}
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              color: '#ff0400',
              fontSize: '15px',
              fontWeight: 700,
              height: '30px',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            {fullNameAlert}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', height: '90px' }}>
          <Typography sx={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'black', marginBottom: '5px' }}>
            WHATSAPP:
          </Typography>

          <input
            placeholder='Ingrese su Whatsapp Ejemplo 113 859 7894'
            ref={phoneValueInput}
            autoComplete='off'
            type='number'
            name='phone'
            onKeyUp={resetAlerts}
          />
          <TbHelp onClick={inputPhoneHelpClickHandler} style={{ position: 'absolute', top: '34px', right: '0px' }} />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              color: '#ff0400',
              fontSize: '15px',
              fontWeight: 700,
              height: '30px',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            {phoneAlert}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', height: '90px' }}>
          <Typography sx={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'black', marginBottom: '5px' }}>
            MAIL:
          </Typography>
          <input
            placeholder='Ingrese su e-mail Ejemplo mail@mail.com'
            ref={mailValueInput}
            autoComplete='off'
            type='text'
            name='mail'
            onKeyUp={resetAlerts}
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              color: '#ff0400',
              fontSize: '15px',
              fontWeight: 700,
              height: '30px',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            {mailAlert}
          </Typography>
        </Box>
        <Button
          ref={submit}
          type='submit'
          sx={{
            position: 'relative',
            width: section === 'chatearConUnOperador' ? 'calc(100%)' : 'calc(100% - 60px)',
            height: section === 'chatearConUnOperador' ? '50px' : '35px',
            margin: section === 'chatearConUnOperador' ? '20px 0 0 0' : '20px 30px 0 30px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '8px',
            boxShadow: section === 'chatearConUnOperador' ? '2px 2px 7px #38d39f70' : 'none',
            background: '#384d56',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '20px',
            fontWeight: '700',
            '&:visited, &:hover': {
              background: '#384d56 !important',
              color: 'white !important',
            },
          }}
        >
          {section === 'chatearConUnOperador' && (
            <img
              style={{ position: 'absolute', left: '20px', top: '6px', color: 'black', width: '38px', height: '38px' }}
              src='https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png'
              alt=''
            />
          )}
          {section === 'chatearConUnOperador' ? 'CHATEA AHORA' : 'ENVIAR'}
        </Button>
      </FormControl>
    </Box>
  );
};
