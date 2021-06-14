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

// import img1 from "../../../../img/ciruelos/1.jpg";
import img1 from "../../../../img/penthouse/1.jpg";
import img2 from "../../../../img/penthouse/2.jpg";
import img3 from "../../../../img/penthouse/3.jpg";
import img4 from "../../../../img/penthouse/4.jpg";
import img5 from "../../../../img/penthouse/5.jpg";
import img6 from "../../../../img/penthouse/6.jpg";
import img7 from "../../../../img/penthouse/7.jpg";
import img8 from "../../../../img/penthouse/8.jpg";
import img9 from "../../../../img/penthouse/9.jpg";

export default function Depto_penthouse() {
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
            <img src={img2} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} className="image_img" alt="Carousel item" />
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
          <CarouselItem>
            <img src={img6} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img7} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img8} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img9} className="image_img" alt="Carousel item" />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="general_data">
        <p className="general_data_p">
          Hermoso departamento en Hacienda del Ciervo #15 en conjunto
          Residemcial Palma Blanca
        </p>
        <p className="general_data_p">Departamento de 240 m2</p>
        <p className="general_data_p">
          3 recámaras con baño completo, baño de visitas, estancia con terraza,
          cuarto de servicio, cocina equipada, 3 estacionamientos, Cuenta con
          salón de fiestas, Ludoteca, Y gym
        </p>
      </div>
      <div className="description">
        <ul>
          <li className="description_li">
            <p className="description_p">
              <FaBuilding /> 240 m2
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> 3 Recámaras con baño completo
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaToilet /> 4 baños
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaCar /> 3 Estacionamientos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaTree /> Salón de fiestas y multiples amenidades
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaKaaba /> Bodega
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaLock /> Seguridad
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaMoneyBillWave /> Renta de $27,000 MX
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
          Hacienda del Ciervo #15 en conjunto Residemcial Palma Blanca
        </p>
      </div>
    </div>
  );
}
