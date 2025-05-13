import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2, // Padding Y (top and bottom)
        mt: 'auto', // Margin top auto for sticking to the bottom
        backgroundColor: '#0a0a0a', // Light gray background
        textAlign: 'center' // Center text
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          © {new Date().getFullYear()} Product Catalog App. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
