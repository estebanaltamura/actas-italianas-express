// ** React import
import { useEffect, useContext } from 'react';

// ** React Router DOM import
import { Link } from 'react-router-dom';

// ** Contexts import
import { IsLoadingContext } from '../../contexts/IsLoadingContextProvider';

// ** Icons import
import { BsChevronLeft } from 'react-icons/bs';

// ** Material UI import
import { Box, Typography } from '@mui/material';

export const GraciasPorSuConsulta: React.FC = () => {
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
          width: '100%',
          minHeight: 'calc(100vh - 160px)',
          height: 'fit-content',
          justifyContent: 'center',
          padding: '60px 20px',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            maxWidth: '320px',
            height: 'fit-content',
            margin: '0 auto',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '26px',
          }}
        >
          En menos de 24 horas nos contactaremos con usted
        </Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: 'fit-content',
            height: '222px',
            alignItems: 'center',
            margin: '100px auto 0 auto',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: '700',
              height: 'fit-content',
              fontSize: '22px',
              lineHeight: '26px',
              color: '#63bee6',
            }}
          >
            Si quiere puede hablar ya mismo con un representante
          </Typography>
          <a
            href='https://wa.me/+34610492978?text=Hola!%20Estoy%20interesado%20en%20gestionar%20un%20acta%20italiana.'
            target='_blank'
            rel='noreferrer'
            style={{ width: '100%', maxWidth: '290px' }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                maxWidth: '290px',
                height: '56px',
                marginTop: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '3px 3px 4px 0px #6c6c6c',
                background: '#384d56',
                color: 'rgba(255, 255, 255, 0.8)',
                transition: 'all 1s',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              <img
                style={{ position: 'absolute', width: '40px', height: '40px', top: '8px', left: '20px' }}
                src='https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png'
              />
              Chatear ahora
            </Box>
          </a>

          <Link to='/home' onClick={backToHomeHandler} style={{ marginTop: '20px', width: '150px', height: '40px' }}>
            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BsChevronLeft
                style={{
                  position: 'absolute',
                  width: '21px',
                  height: '21px',
                  top: '11px',
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
      </Box>
    </>
  );
};
