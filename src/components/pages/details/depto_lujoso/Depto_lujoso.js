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
import img1 from "../../../../img/lujoso/1.jpg";
import img2 from "../../../../img/lujoso/2.jpg";
import img3 from "../../../../img/lujoso/3.jpg";
import img4 from "../../../../img/lujoso/4.jpg";
import img5 from "../../../../img/lujoso/5.jpg";
import img6 from "../../../../img/lujoso/6.jpg";
import img7 from "../../../../img/lujoso/7.jpg";
import img8 from "../../../../img/lujoso/8.jpg";
import img9 from "../../../../img/lujoso/9.jpg";
import img10 from "../../../../img/lujoso/10.jpg";
import img11 from "../../../../img/lujoso/11.jpg";

export default function Depto_lujoso() {
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
          <CarouselItem>
            <img src={img10} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img11} className="image_img" alt="Carousel item" />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="general_data">
        <p className="general_data_p">
          Departamento lujoso ubicado en Central Park, bosque Real
        </p>
        <p className="general_data_p">Departamento de 120 m2</p>
        <p className="general_data_p">
          2 recámaras con baño completo, baño de visitas, acabados de lujo, la
          recámara principal con baño y vestidor , 2 estacionamientos , bodega,
          gym equipado, sala de vapor , jacuzzi, alberca, salón de masajes ,
          yoga, juice bar , área de perros, Estetica de perros etc
        </p>
      </div>
      <div className="description">
        <ul>
          <li className="description_li">
            <p className="description_p">
              <FaBuilding /> 120 m2
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> 2 Recámaras con baños completos
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> Recámara principal con baño completo y vestidor
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaToilet /> 4 Baños
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaCar /> 2 Estacionamientos
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
              <FaMoneyBillWave /> Renta de $25,000 MX
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
        <p className="location_p">Central Park, Bosque Real</p>
      </div>
    </div>
  );
}
