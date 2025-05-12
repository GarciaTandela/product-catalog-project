import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Container from '@mui/material/Container';
import '@/assets/css/globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Container sx={{ my: 6 }} maxWidth="xl">
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
