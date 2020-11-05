import React from "react";

import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

import ondas from "../../assets/onda-blanca.svg";
import about from "../../assets/about.png";
import lineasAzul1 from "../../assets/lineas-azul1.svg";
import lineasAzul2 from "../../assets/lineas-azul2.svg";
import yesmom from "../../assets/somos-yesmom.svg";
import nube1 from "../../assets/nube1.svg";
import nube2 from "../../assets/nube2.svg";

const About = () => {
  return (
    <>
      <div className="box-banner-about">
        <img src={ondas} alt="ondas" className="ondas" />
        <h4 className="text-title-blog">Sobre nosotros</h4>
        <img src={ondas} alt="ondas" className="ondas" />
      </div>
      <Container fluid="true" className="section-sorteo-home">
        <img src={nube1} alt="nube yesmom" className="nube1-somos" />
        <img src={nube2} alt="nube yesmom" className="nube2-somos" />
        <Row>
          <Col xs>
            <div className="box-somos-yesmom">
              <img src={yesmom} alt="" className="pb-3" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mi
                netus id elementum tellus mattis lorem ut scelerisque. Faucibus
                leo tellus nam tincidunt lectus morbi eget elementum. Sed fames
                mollis duis duis adipiscing nisi, eleifend orci, lacinia.
                Feugiat elementum elementum sit arcu scelerisque aliquam quisque
                imperdiet congue. Aliquam adipiscing amet netus ac habitant
                faucibus ut morbi nam. Augue cursus vulputate pulvinar ut vitae
                bibendum viverra nisi. Enim quam tellus, ipsum vitae id ultrices
                feugiat.
              </p>
              <p>
                Eget nulla elementum et, bibendum at adipiscing. Tempus lectus
                accumsan morbi velit interdum ultrices odio sagittis Augue
                cursus vulputate pulvinar ut vitae bibendum viverra nisi. Enim
                quam tellus, ipsum vitae id ultrices feugiat. Eget nulla
                elementum et, bibendum at adipiscing. Tempus lectus accumsan
                morbi velit interdum ultrices odio sagittis.
              </p>
            </div>
          </Col>
          <Col xs>
            <div className="box-img-sorteo-home">
              <img src={lineasAzul1} alt="lineas" className="line-up-somos" />
              <img
                src={about}
                alt="imagen sorteo yesmom home"
                className="img-sorteo"
              />
              <img src={lineasAzul2} alt="lineas" className="line-down-somos" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="fondo-video-somos">
        <h3 className="title-fuxia">&#9733; Nuestra historia &#9733;</h3>
        <div className="box-video-somos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HmvCTcrR8fA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default About;
