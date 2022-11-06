import "@fontsource/public-sans/variable.css";
import "@fontsource/jost/700.css";
import "../styles/globals.css";
import type { AppProps } from "next/app"
import Head from "next/head"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider"
import { Container } from "../components/Container";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Jesús Olazagoitia</title>
        <meta name="description" content="En este blog encontrarás 🔮 artículos sobre desarrollo web frontend, 🏗️ side proyects y mis expericias 🤪 trabajando en una startup tecnológica" />
      </Head>
      
      <Header />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
