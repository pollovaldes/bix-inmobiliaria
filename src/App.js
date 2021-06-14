import "./App.css";
import Navbar from "create-react-nav";
import Home from "./components/pages/home/Home.js";
import About from "./components/pages/about/About.js";
import Contact from "./components/pages/contact/Contact.js";
import Depto_torreCiruelos from "./components/pages/details/depto_torreCiruelos/Depto_torreCiruelos";
import Depto_hermoso from "./components/pages/details/depto_hermoso/Depto_hermoso";
import Depto_lujoso from "./components/pages/details/depto_lujoso/Depto_lujoso";
import Depto_penthouse from "./components/pages/details/depto_penthouse/Depto_penthouse";
import Depto_lindo from "./components/pages/details/depto_lindo/Depto_lindo";

function App() {
  const links = [
    ["/", "Inicio", Home],
    ["/About", "¿Quiénes somos?", About],
    ["/Contact", "Contáctanos", Contact],
    ["/depto1", "", Depto_torreCiruelos],
    ["/depto2", "", Depto_hermoso],
    ["/depto3", "", Depto_lujoso],
    ["/depto4", "", Depto_penthouse],
    ["/depto5", "", Depto_lindo],
  ];

  return (
    <>
      {/* <Navbar logoTxt="BIX Inmobiliaria" routes={links} /> */}
      <Navbar logoTxt="BIX Inmobiliaria" routes={links} />
    </>
  );
}

export default App;
