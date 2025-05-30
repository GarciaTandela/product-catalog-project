import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/SharedComponents/Navigations/Header/HeaderView';
import Container from '@mui/material/Container';
import Footer from '@/components/SharedComponents/Navigations/Footer/FooterView';
import '@/assets/css/globals.css';
import StoreProvider from '@/stores/redux-provider';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StoreProvider>
            <Header></Header>
            <Container sx={{ my: 6 }} maxWidth="xl">
              {children}
            </Container>
            <Footer></Footer>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
