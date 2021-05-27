import React from "react";
import "../GlobalHeaderStyling.css";
import CardView from "./CardView";

function Home() {
	return (
		<>
			<p className="header-title">Bienvenido a BIX Inmobiliaria</p>
			<p className="header-subtitle">¿Listo para conocer tu nuvo hogar?</p>
			<CardView />
		</>
	);
}

export default Home;
