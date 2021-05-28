import React from "react";
import {
	Carousel,
	CarouselItem,
	Button,
	Card,
	CardContent,
	CardAction,
	CardMedia,
} from "ui-neumorphism";
import ReactPlayer from "react-player";
import "ui-neumorphism/dist/index.css";
import "./CardView.css";

import wh from "../../../img/contact/wh.png";
import phone from "../../../img/contact/phone.png";

export default function CardView() {
	const Spacer = require("react-spacer");

	function btn_contact_wh() {
		window.open("https:wa.me/525564150611", "_parent");
	}

	function btn_contact_cell() {
		window.open("tel:+525564150611", "_parent");
	}

	return (
		<div>
			<div className="card-view">
				<Card rounded elevation={3} width={300}>
					<Carousel cycle interval={3000}>
						<CarouselItem>
							<img src={wh} className="image01" />
						</CarouselItem>
						<CarouselItem>
							<img src={phone} className="image01" />
						</CarouselItem>
					</Carousel>
					<CardContent>
						<p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
							¡Contáctanos!
						</p>
						<p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
							Siéntete libre de contactarnos
						</p>
					</CardContent>
					<CardAction
						style={{
							justifyContent: "center",
							alignContent: "center",
							paddingTop: 10,
							paddingBottom: 30,
							display: "grid",
							gridGap: 20,
							gridAutoFlow: "column",
						}}
					>
						<Button
							rounded
							color="var(--primary)"
							size="large"
							style={{ paddingRight: 10, paddingLeft: 10 }}
							onClick={btn_contact_wh}
						>
							WhatsApp
						</Button>

						<Button
							rounded
							color="var(--primary)"
							size="large"
							style={{ paddingRight: 10, paddingLeft: 10 }}
							onClick={btn_contact_cell}
						>
							Teléfono
						</Button>
					</CardAction>
				</Card>
			</div>
			<Spacer height="100px" />
		</div>
	);
}
