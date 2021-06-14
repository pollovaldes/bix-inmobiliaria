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
import img1 from "../../../../img/hermoso/1.jpg";
import img2 from "../../../../img/hermoso/2.jpg";
import img3 from "../../../../img/hermoso/3.jpg";
import img4 from "../../../../img/hermoso/4.jpg";
import img5 from "../../../../img/hermoso/5.jpg";
import img6 from "../../../../img/hermoso/6.jpg";
import img7 from "../../../../img/hermoso/7.jpg";
import img8 from "../../../../img/hermoso/8.jpg";
import img9 from "../../../../img/hermoso/9.jpg";
import img10 from "../../../../img/hermoso/10.jpg";
import img11 from "../../../../img/hermoso/11.jpg";
import img12 from "../../../../img/hermoso/12.jpg";
import img13 from "../../../../img/hermoso/13.jpg";
import img14 from "../../../../img/hermoso/14.jpg";

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
          <CarouselItem>
            <img src={img12} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img13} className="image_img" alt="Carousel item" />
          </CarouselItem>
          <CarouselItem>
            <img src={img14} className="image_img" alt="Carousel item" />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="general_data">
        <p className="general_data_p">
          Hermoso departamento con ubicado en el condominio Residencial
          Interlomas
        </p>
        <p className="general_data_p">Departamento de 99 m2</p>
        <p className="general_data_p">
          3 recámaras, 2 estacionamientos techados, bodega, cuenta con jardín
          con juegos para niños, seguridad, bastante bonito
        </p>
      </div>
      <div className="description">
        <ul>
          <li className="description_li">
            <p className="description_p">
              <FaBuilding /> 99 m2
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaBed /> 3 Recámaras
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaCar /> 2 Estacionamientos techados
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaTree /> Jardín con juegos para niños
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaLock /> Seguridad
            </p>
          </li>
          <li className="description_li">
            <p className="description_p">
              <FaMoneyBillWave /> Renta de $15,00 MX
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
          Av Palo solo 132 A en el condominio Residemcial Interlomas
        </p>
      </div>
    </div>
  );
}
