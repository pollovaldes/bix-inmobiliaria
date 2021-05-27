import "./App.css";
import Navbar from "create-react-nav";
import Home from "./components/pages/home/Home.js";
import About from "./components/pages/about/About.js";
import Contact from "./components/pages/contact/Contact.js";
import CardView from "./components/pages/home/CardView.js";

function App() {
	const links = [
		["/", "Inicio", Home],
		["/About", "¿Quiénes somos?", About],
		["/Contact", "Contáctanos", Contact],
	];

	return (
		<>
			<Navbar logoTxt="BIX Inmobiliaria" routes={links} />
		</>
	);
}

export default App;
