import React from "react";
import CardView from "./CardView";
import "./CardView.css";

function Contact() {
	return (
		<div>
			<h1 className="header-title">Contáctanos</h1>
			<p className="header-subtitle">
				¿Tienes alguna duda?, ¿O solo quieres saludar?, Siéntete libre de
				contactarnos
			</p>
			<CardView />
		</div>
	);
}

export default Contact;
