import About from "./components/About";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { GlobalCss } from "./styles";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <GlobalCss />
      <Header isMobile={isMobile} />
      <About />
      <Menu />
      <Details />
      <Footer />
    </>
  );
}

export default App;
