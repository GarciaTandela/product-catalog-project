'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <AdbIcon sx={{ display: 'flex', mr: 1 }} />
          </Link>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="label"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Product Catalog App
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
