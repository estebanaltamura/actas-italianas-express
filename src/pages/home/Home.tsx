// ** React import
import { useEffect, useState, useContext, DOMAttributes } from 'react';

// ** React Router DOM import
import { Link } from 'react-router-dom';

// ** Contexts import
import { IsLoadingContext } from '../../contexts/IsLoadingContextProvider';

// ** Material UI import
import { Box, keyframes, Typography } from '@mui/material';

// ** Hooks import
import { useSyntheticMediaQueries } from '../../hooks/useSyntheticMediaQueries';

// ** Components import
import { Form } from '../../components/Form/Form';

// ** Icons import
import { IoChatbubblesOutline } from 'react-icons/io5';
import Lottie from 'react-lottie-player';

// ** Spinner import
import spinner from '../../assets/spinnerJson.json';

export const Home: React.FC = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState<number>(window.innerWidth);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const { getCurrentAndLastWidth, wasTriggeredMediaQuery } = useSyntheticMediaQueries();

  const loadCoverImageHandler = (event: React.SyntheticEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).classList.value.includes('portada') && setIsLoading(false);
  };

  const whatsappIconAnimation = keyframes`
  0% {
    width: 240px;
    height: 60px;
  }
  15% {
    width: 244px;
    height: 62px;
  }
  30% {
    width: 240px;
    height: 60px;
  }
  45% {
    width: 244px;
    height: 62px;
  }
  60% {
    width: 240px;
    height: 60px;
  }
  100% {
    width: 240px;
    height: 60px;
  }
`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    const changeScreenWidthHandler = () => {
      setCurrentScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeScreenWidthHandler);

    return () => window.removeEventListener('resize', changeScreenWidthHandler);
  }, []);

  useEffect(() => {
    const [currentWidth, lastWidth] = getCurrentAndLastWidth(currentScreenWidth);
    wasTriggeredMediaQuery(currentWidth, lastWidth) && setIsLoading(true);
  }, [currentScreenWidth]);

  return (
    <Box
      sx={{
        position: 'relative',
        margin: '0 auto',
        paddingTop: '30px',
        width: '100vw',
        minHeight: '100vh',
        fontSize: '20px',
        '@media screen and (min-width: 768px)': {
          maxWidth: '900px',
          padding: '30px 20px 0 20px',
          minHeight: '100vh',
          fontSize: '20px',
        },
      }}
      onLoad={loadCoverImageHandler}
    >
      {isLoading === true && (
        <Lottie
          animationData={spinner}
          style={{ width: '160px', height: '160px', position: 'absolute', top: '36%', left: 'calc(50% - 80px)' }}
          play
          loop
        />
      )}

      <Box className={isLoading === true ? 'hidden' : ''}>
        {currentScreenWidth < 768 ? (
          <img className='portada' src='https://i.postimg.cc/XY4Hf5Bx/portadamobile4.jpg' alt='' />
        ) : (
          <img className='portada' src='https://i.postimg.cc/wvjpTvpT/portadadesktop2.jpg' alt='' />
        )}
        <Box sx={{ padding: '0 20px' }}>
          <Typography
            sx={{
              fontSize: '28px',
              color: '#4e5c66',
              lineHeight: '30px',
              fontFamily: 'Roboto Serif, serif !important',
              margin: '20px auto 5px auto',
              textAlign: 'center',
            }}
          >
            ACTAS ITALIANAS EXPRESS
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              color: '#4e5c66',
              lineHeight: '30px',
              fontFamily: 'Roboto Serif, serif !important',
              textAlign: 'center',
            }}
          >
            ELEGI VIVIR MEJOR
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#4e5c66', lineHeight: '30px', marginTop: '20px' }}>
            Actas italianas express surgió de la necesidad de solucionar el problema que tienen todos los descendientes
            de italianos a la hora de pedir actas desde Argentina.
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#4e5c66', lineHeight: '30px', marginTop: '20px' }}>
            Las comunas italianas son muy reticentes a responder pedidos desde el exterior ya que están saturadas y
            priorizan las gestiones realizadas en la propia Italia.
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              color: '#d55e20',
              lineHeight: '30px',
              margin: '30px 0',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            EN ACTAS ITALIANAS EXPRESS HACEMOS HASTA LO IMPOSIBLE PARA CONSEGUIR TU ACTA EN POCOS DIAS
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#4e5c66', lineHeight: '30px' }}>
            <b>
              Nuestra red de operadores en Italia logran en pocos días encontrar el acta, lo cual desde Argentina suele
              ser un trabajo de meses{' '}
            </b>
            y que en muchísimos casos la comuna no responde ni el pedido original ni a los reclamos subsecuentes.
          </Typography>

          <Typography
            sx={{
              fontSize: '22px',
              color: '#4e5c66',
              lineHeight: '30px',
              textAlign: 'center',
              fontWeight: '700',
              marginTop: '25px',
            }}
          >
            Pedí el acta de nacimiento de tu AVO
          </Typography>
          <Typography sx={{ fontSize: '15px', color: '#4e5c66', lineHeight: '24px', textAlign: 'center' }}>
            (AVO es el antepasado italiano que migro a la argentina)
          </Typography>
          <Typography
            sx={{ fontSize: '20px', color: '#d55e20', lineHeight: '30px', textAlign: 'center', fontWeight: '700' }}
          >
            Déjenos sus datos y lo contactaremos en menos de 24 horas
          </Typography>
          <Form />
          <Box sx={{ marginTop: '20px', border: '1px solid #bebebe' }}></Box>
          <Typography sx={{ fontSize: '20px', color: '#4e5c66', lineHeight: '30px', marginTop: '15px' }}>
            Luego de tener el acta de nacimiento de tu AVO tenés que solicitar en Argentina el certificado de no
            naturalización. El certificado de no naturalización demuestra que el AVO no renunció a su ciudadanía
            italiana.
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#4e5c66', lineHeight: '30px', marginTop: '15px' }}>
            Teniendo el acta de nacimiento italiana y el certificado de no naturalizacion indicando que tu avo no
            renunció a su ciudadanía italiana eso demuestra que <b>TENES DERECHO A SER CIUDADANO/A ITALIANO</b>
          </Typography>
          <Box sx={{ marginTop: '25px', border: '1px solid #bebebe' }}></Box>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#d55e20',
              lineHeight: '30px',
              margin: '25px 0 30px 0',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            HAY DIFERENTES FORMAS DE CONSEGUIR LA CIUDADANIA ITALIANA, PERO TODAS TIENEN ALGO EN COMUN: SE NECESITA LA
            INFORMACION DE TU ANTEPASADO QUE MIGRO A ARGENTINA QUE NOS DA EL DERECHO A SER CIUDADANO/A ITALIANO/A
          </Typography>
        </Box>

        <Link to='/chatearConUnOperador'>
          <Box
            sx={{
              display: 'flex',
              padding: '2px 15px 0 15px',
              justifyContent: 'center',
              animationName: `${whatsappIconAnimation}`,
              animationDuration: '2.5s',
              animationDelay: '2.5s',
              animationIterationCount: 'infinite',
              position: 'fixed',
              bottom: currentScreenWidth < 600 ? '55px' : '200px',
              right: currentScreenWidth < 600 ? '40px' : '60px',
              width: '240px',
              height: '60px',
              zIndex: 1,
              backgroundColor: '#384d56',
              border:'2px solid #25d366',
              borderRadius: '15px',
              boxShadow: '5px 5px 10px #4c4c4c',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0 auto',
              color: 'white',

              fontSize: '14px',
              fontWeight: 500,
              '&:visited, &:hover': {
                background: '#ed8936 !important',
                color: 'white !important',
            },
            }}
          >
            <IoChatbubblesOutline style={{ width: '30px', height: '30px' }} />
            <Typography
              sx={{ fontSize: '17px', color: 'white', fontWeight: 600, fontFamily: 'arial !important', marginLeft: '12px' }}
            >
              CHATEAR AHORA
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
