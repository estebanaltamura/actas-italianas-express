// ** React import
import { useEffect, useContext } from 'react';

// ** React Router DOM import
import { Link } from 'react-router-dom';

// ** Contexts import
import { IsLoadingContext } from '../../contexts/IsLoadingContextProvider';

// ** Material UI import
import { Box, Typography } from '@mui/material';

// ** Components import
import { Form } from '../../components/Form/Form';

// ** Icons import
import { BsChevronLeft } from 'react-icons/bs';

export const ChatearConUnOperador: React.FC = () => {
  const { setIsLoading } = useContext(IsLoadingContext);

  const backToHomeHandler = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '30px 0',
          width: '100%',
          minHeight: 'calc(100vh - 160px)',
          height: 'fit-content',
          justifyContent: 'center',
          overflowY: 'scroll',
        }}
      >
        <Typography
          sx={{
            margin: '20px auto',
            padding: '0 20px',
            textAlign: 'center',
            color: '#63bee6',
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '26px',
          }}
        >
          Ingresa tu informacion de contacto para iniciar la asesoria gratis por whatsapp
        </Typography>
        <Form />
        <Link to='/home' onClick={backToHomeHandler} style={{ margin: '0 auto', width: '150px', height: '40px' }}>
          <Box sx={{ display: 'flex', position: 'relative' }}>
            <BsChevronLeft
              style={{
                position: 'absolute',
                width: '21px',
                height: '21px',
                top: '3px',
                left: '19px',
                color: '#384d56',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'white',
                color: '#384d56',
                margin: '0 auto',
                width: '150px',
                height: 'fit-content',
                fontSize: '20px',
                lineHeight: '24px',

                fontWeight: 900,
                ':&hover': {
                  color: '#384d56 !important',
                },
              }}
            >
              Volver
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  );
};
