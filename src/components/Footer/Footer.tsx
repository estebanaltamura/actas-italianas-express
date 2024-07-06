// ** Material UI import
import { Box, Typography } from '@mui/material';

// ** Icons import
import { BsInstagram } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer>
      <Typography sx={{ color: 'white', width: '100%', textAlign: 'center', fontSize: '20px' }}>
        CONTACTANOS Y SEGUINOS EN REDES
      </Typography>

      <Box
        sx={{
          display: 'grid',
          width: '100%',
          maxWidth: '355px',
          height: '80px',
          margin: '0 auto',
          gridTemplateRows: 'repeat(3, 40px)',
          gridTemplateColumns: '55px 300px',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <MdAlternateEmail
          style={{ display: 'flex', width: '20px', height: '20px', color: 'white', margin: 'auto', fontWeight: 700 }}
        />
        <Typography
          sx={{
            fontWeight: 700,
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            padding: '0',
            fontSize: '18px',
            color: 'white',
            userSelect: 'all',
            width: 'fitContent',
          }}
        >
          actasitalianaexpress@gmail.com
        </Typography>
        <BsInstagram
          style={{ display: 'flex', width: '20px', height: '20px', color: 'white', margin: 'auto', fontWeight: 700 }}
        />
        <a
          style={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            padding: '0',
            fontSize: '18px',
            color: 'white',
          }}
          href='https://www.instagram.com/actasitalianasexpress/'
          target='_blank'
          rel='noreferrer'
        >
          @actasitalianasexpress
        </a>
      </Box>
    </footer>
  );
};
