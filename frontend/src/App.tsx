import { Provider } from "react-redux";
import About from "./components/About";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { GlobalCss } from "./styles";
import { store } from "./store";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Provider store={store}>
        <Header isMobile={isMobile} />
        <GlobalCss />
        <About />
        <Menu />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
