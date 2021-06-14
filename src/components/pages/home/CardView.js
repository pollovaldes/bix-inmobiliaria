import React from "react";
import {
  Carousel,
  CarouselItem,
  Button,
  Card,
  CardContent,
  CardAction,
} from "ui-neumorphism";
import ReactPlayer from "react-player";
import "ui-neumorphism/dist/index.css";
import "./CardView.css";

import { useHistory } from "react-router-dom";

//CIRUELOS//
import ciruelos_cover_1 from "../../../img/ciruelos/card-cover/1.jpg";
import ciruelos_cover_2 from "../../../img/ciruelos/card-cover/3.jpg";
import ciruelos_cover_3 from "../../../img/ciruelos/card-cover/5.jpg";

//HERMOSO//
import hermoso_cover_1 from "../../../img/hermoso/card-cover/1.jpg";
import hermoso_cover_2 from "../../../img/hermoso/card-cover/6.jpg";
import hermoso_cover_3 from "../../../img/hermoso/card-cover/13.jpg";

//LUJOSO//
import lujoso_cover_1 from "../../../img/lujoso/card-cover/1.jpg";
import lujoso_cover_2 from "../../../img/lujoso/card-cover/2.jpg";
import lujoso_cover_3 from "../../../img/lujoso/card-cover/9.jpg";

//PENTHOUSE//
import penthouse_cover_1 from "../../../img/penthouse/card-cover/2.jpg";
import penthouse_cover_2 from "../../../img/penthouse/card-cover/5.jpg";
import penthouse_cover_3 from "../../../img/penthouse/card-cover/9.jpg";

//METRICA//
// import metrica_cover_1 from "../../../img/penthouse/card-cover/2.jpg";
// import metrica_cover_2 from "../../../img/penthouse/card-cover/5.jpg";
// import metrica_cover_3 from "../../../img/penthouse/card-cover/9.jpg";

export default function CardView() {
  const Spacer = require("react-spacer");

  const history = useHistory();

  // const routeChange = (path) => {
  //   history.push("/depto1");
  // };

  return (
    <div>
      <div className="card-view">
        <Card rounded elevation={3} width={300}>
          <Card inset>
            <Carousel cycle interval={6000} showArrows vertical>
              <CarouselItem>
                <img
                  src={ciruelos_cover_1}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={ciruelos_cover_2}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={ciruelos_cover_3}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
            </Carousel>
          </Card>
          <CardContent>
            <p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
              Torre Ciruelos
            </p>
            <p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
              Condominio Residencial Avivia
            </p>
          </CardContent>
          <Card></Card>
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
              style={{ paddingRight: 35, paddingLeft: 35 }}
              onClick={() => history.push("/bix-inmobiliaria/depto1")}
            >
              Ver más
            </Button>
          </CardAction>
        </Card>

        <Card rounded elevation={3} width={300}>
          <Card inset>
            <Carousel cycle interval={6000} showArrows vertical>
              <CarouselItem>
                <img
                  src={hermoso_cover_1}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={hermoso_cover_2}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={hermoso_cover_3}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
            </Carousel>
          </Card>
          <CardContent>
            <p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
              Hermoso departamento
            </p>
            <p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
              Condominio Residencial Interlomas
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
              style={{ paddingRight: 35, paddingLeft: 35 }}
              onClick={() => history.push("/bix-inmobiliaria/depto2")}
            >
              Ver más
            </Button>
          </CardAction>
        </Card>

        <Card rounded elevation={3} width={300}>
          <Card inset>
            <Carousel cycle interval={6000} showArrows vertical>
              <CarouselItem>
                <img
                  src={lujoso_cover_1}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={lujoso_cover_2}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={lujoso_cover_3}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
            </Carousel>
          </Card>
          <CardContent>
            <p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
              Lujuso departamento
            </p>
            <p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
              Central Park, Interlomas
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
              style={{ paddingRight: 35, paddingLeft: 35 }}
              onClick={() => history.push("/bix-inmobiliaria/depto3")}
            >
              Ver más
            </Button>
          </CardAction>
        </Card>

        <Card rounded elevation={3} width={300}>
          <Card inset>
            <Carousel cycle interval={6000} showArrows vertical>
              <CarouselItem>
                <img
                  src={penthouse_cover_1}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={penthouse_cover_2}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={penthouse_cover_3}
                  className="image01"
                  alt="Carousel item"
                />
              </CarouselItem>
            </Carousel>
          </Card>
          <CardContent>
            <p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
              Penthouse
            </p>
            <p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
              Hacienda del Ciervo, Palma Blanca
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
              style={{ paddingRight: 35, paddingLeft: 35 }}
              onClick={() => history.push("/bix-inmobiliaria/depto4")}
            >
              Ver más
            </Button>
          </CardAction>
        </Card>

        <Card rounded elevation={3} width={300}>
          <Carousel cycle interval={6000} vertical>
            <CarouselItem>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=yWsKTMmIkys"
                controls={true}
                muted={true}
                width={300}
                height={600}
                loop={true}
              />
            </CarouselItem>
            {/* <CarouselItem>
							<img src={img2} className="image01" />
						</CarouselItem>
						<CarouselItem>
							<img src={img3} className="image01" />
						</CarouselItem> */}
          </Carousel>
          <CardContent>
            <p style={{ color: "black", fontWeight: 300, fontSize: 22 }}>
              Lindo departamento
            </p>
            <p style={{ color: "black", fontWeight: 100, fontSize: 17 }}>
              Central Park, Interlomas
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
              style={{ paddingRight: 35, paddingLeft: 35 }}
              onClick={() => history.push("/bix-inmobiliaria/depto5")}
            >
              Ver más
            </Button>
          </CardAction>
        </Card>
      </div>
      <Spacer height="100px" />
    </div>
  );
}
