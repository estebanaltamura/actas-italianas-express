// ** Material UI import
import { Box, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <header>
      <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
          ACTAS ITALIANAS EXPRESS - EL ACTA DE TU AVO EN DIAS
        </Typography>
      </Box>
    </header>
  );
};
