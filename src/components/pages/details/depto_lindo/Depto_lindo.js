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
  FaLock,
  FaTree,
} from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactPlayer from "react-player";

// import img1 from "../../../../img/ciruelos/1.jpg";

export default function Depto_lindo() {
  function btn_contact_wh() {
    window.open("https:wa.me/525564150611", "_parent");
  }

  function btn_contact_cell() {
    window.open("tel:+525564150611", "_parent");
  }

  return (
    <div className="container">
      <div className="image">
        <Carousel showArrows className="carousel" hideDelimiters={true}>
          <CarouselItem>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=yWsKTMmIkys"
              controls={true}
              loop={true}
            />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="general_data">
        <p className="general_data_p">
          Hermoso departamento en Vía Magna Interlomas
        </p>
        <p className="general_data_p">Departamento de 96 m2</p>
        <p className="general_data_p">
          Hermoso departamento de 96 m2 con 2 recámaras, la principal con baño y
          vestidor integrado, y la segunda recámara con closet, 2 baños
          completos, cocina abierta con cubierta de granito, Área de lavado,
          excelentes amenidades con wifi, él, manetenimiento incluido en la
          renta
        </p>
      </div>
      <div className="description">
        <ul>
          <li className="description_li">
            <p className="description_p">
              <FaBuilding /> 96 m2
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> 2 recámaras, la principal con baño y vestidor integrado.
              La segunda recámara con closet.
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaToilet /> 2 baños completos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaCar /> 2 Estacionamientos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaTree /> Área de lavado
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaLock /> Seguridad
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaMoneyBillWave /> Renta de $22,000 MX
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
          Vía Magna Interlomas, Huixquilucan Estado de México
        </p>
      </div>
    </div>
  );
}
