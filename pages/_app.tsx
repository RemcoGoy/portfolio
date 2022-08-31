import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
