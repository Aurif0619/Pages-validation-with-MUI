import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/Img404.jpeg'; 

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        component="img"
        src={NotFoundImage}
        alt="404 Not Found"
        sx={{
          maxWidth: '100%',
          width: '300px',
          marginBottom: 2,
        }}
      />
      <Typography variant="h3" color="primary" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
        The page you are looking for doesn’t exist or an error occurred.
      </Typography>
      <Button
        variant="contained"
        color="success"
        component={Link}
        to="/"
        sx={{
          textTransform: 'none',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '5px',
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
