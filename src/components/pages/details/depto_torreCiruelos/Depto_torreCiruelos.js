import React from "react";
import "../HouseDetailView.css";
import { Carousel, CarouselItem, Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import {
  FaBed,
  FaBuilding,
  FaCar,
  FaKaaba,
  FaStar,
  FaToilet,
  FaTshirt,
  FaMoneyBillWave,
} from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

// import img1 from "../../../../img/ciruelos/1.jpg";
import img1 from "../../../../img/ciruelos/1_edited.png";
import img2 from "../../../../img/ciruelos/2.jpg";
import img3 from "../../../../img/ciruelos/3.jpg";
import img4 from "../../../../img/ciruelos/4.jpg";
import img5 from "../../../../img/ciruelos/5.jpg";

export default function Depto_torreCiruelos() {
  function btn_contact_wh() {
    window.open("https:wa.me/525564150611", "_parent");
  }

  function btn_contact_cell() {
    window.open("tel:+525564150611", "_parent");
  }

  return (
    <div className="container">
      <div className="image">
        <Carousel showArrows className="carousel">
          <CarouselItem>
            <img src={img1} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img2} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img3} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img4} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img5} className="image_img" alt="Carousel item" />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="general_data">
        <p className="general_data_p">
          Departamento #311 de la Torre Ciruelos dentro del condominio
          "Residencial Avivia" ubicado en valla Secretaría de Marina # 58
          Bosques de las Lomas.
        </p>
        <p className="general_data_p">Departamento de 267 m2</p>
        <p className="general_data_p">
          3 recámaras con vestidor y baño completo, estancia, comedor, sala de
          TV, Cocina equipada, alacena, cuarto de servicio, 3 estacionamientos y
          bodega. Las amenidades son, gym, Alberca techada, otra al aire libre,
          Ludoteca, salón de adultos, canchas de squash, salón de belleza, spa.
          Sala de masajes, jacuzzi, vapor, restaurante, tienda sushi bar etc
        </p>
      </div>
      <div className="description">
        <ul>
          <li className="description_li">
            <p className="description_p">
              <FaBuilding /> 267 m2
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> 3 Recámaras con vestidor y baños completos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaToilet /> 3 Baños
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaTshirt /> Cuarto de servicio
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaCar /> 3 Estacionamientos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaKaaba /> Bodega
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaStar /> Una gran cantidad de amenidades
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaMoneyBillWave /> Renta de $48,000 MX
            </p>
          </li>
        </ul>
      </div>
      <div className="contact">
        <p className="contact_p">¡Contáctanos!</p>
        <Button
          rounded
          color="var(--primary)"
          size="large"
          style={{ paddingRight: 50, paddingLeft: 50, marginTop: 25 }}
          onClick={btn_contact_wh}
        >
          WhatsApp
        </Button>

        <Button
          rounded
          color="var(--primary)"
          size="large"
          style={{ paddingRight: 50, paddingLeft: 50, marginTop: 25 }}
          onClick={btn_contact_cell}
        >
          Teléfono
        </Button>
      </div>
      <div className="location">
        <p className="location_p_header">Dirección</p>
        <p className="location_p">
          Residencial Aviva #58, Bosques de las Lomas, Interlomas
        </p>
      </div>
    </div>
  );
}
