import React from "react";
import "../GlobalHeaderStyling.css";
import CardView from "./CardView";

function Home() {
	return (
		<>
			<h1 className="header-title">Bienvenido a BIX Inmobiliaria</h1>
			<p className="header-subtitle">¿Listo para conocer tu nuvo hogar?</p>
			<CardView />
		</>
	);
}

export default Home;
