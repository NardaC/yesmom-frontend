import React from "react";

import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../assets/home/banner.png";
import sorteo from "../../assets/home/img-sorteo-home.png";
import ondas from "../../assets/ondas.svg";
import lineas1 from "../../assets/lineas-rosa1.svg";
import lineas2 from "../../assets/linea-rosa2.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import nube from "../../assets/home/nube.svg";
import destacado from "../../assets/home/destacado.png";
import ondaRosa from "../../assets/onda-rosa.svg";
import blog from "../../assets/home/img-blog-home.png";
import lineasAzul1 from "../../assets/lineas-azul1.svg";
import lineasAzul2 from "../../assets/lineas-azul2.svg";

const Home = () => {
  return (
    <>
      <section fluid="true" className="box-banner">
        <img src={banner} />
      </section>
      <Container fluid="true" className="section-sorteo-home">
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-text-title">
              <img src={ondas} alt="ondas" className="ondas" />
              <h4 className="text-title">Sorteo</h4>
              <img src={ondas} alt="ondas" className="ondas" />
            </div>
            <div className="box-sorteo-home">
              <h3 className="title-fuxia">Gana un pack Yes Mom</h3>
              <h6 className="subtitle-dark">
                Crea una lista de regalo y gana un pack de productos para ti y
                tu bebé
              </h6>
              <div className="btn-yellow">¡Comenzar!</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-img-sorteo-home">
              <img src={lineas1} alt="lineas" className="line-up" />
              <img
                src={sorteo}
                alt="imagen sorteo yesmom home"
                className="img-sorteo"
              />
              <img src={lineas2} alt="lineas" className="line-down" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid="true" className="section-lo-mejor-home">
        <img src={nube} alt="nube yesmom" className="nube-up" />
        <div className="box-title-lo-mejor-home">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <h3 className="title-fuxia">Lo mejor para tu bebé</h3>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
        <img src={ondaRosa} alt="onda rosa yes mom" className="onda-rosa" />
        <Row className="box-img-lo-mejor">
          <Col xs>
            <div className="img-lo-mejor">
              <img src={destacado} alt="" />
            </div>
            <div className="btn-lo-mejor">Tiendas destacadas</div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={destacado} alt="" />
            </div>
            <div className="btn-lo-mejor bg-fuxia">
              Lo + <br></br> buscado
            </div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={destacado} alt="" />
            </div>
            <div className="btn-lo-mejor bg-verde">Sin moverte de casa</div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={destacado} alt="" />
            </div>
            <div className="btn-lo-mejor bg-azul">Juguetes</div>
          </Col>
        </Row>
        <img src={nube} alt="nube yesmom" className="nube-down" />
      </Container>
      <Container fluid="true" className="section-blog-home">
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-img-blog-home">
              <img src={lineasAzul1} alt="lineas" className="line-up-azul" />
              <img
                src={blog}
                alt="imagen blog yesmom home"
                className="img-blog"
              />
              <img src={lineasAzul2} alt="lineas" className="line-down-azul" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-text-title">
              <img src={ondas} alt="ondas" className="ondas" />
              <h4 className="text-title">Blog</h4>
              <img src={ondas} alt="ondas" className="ondas" />
            </div>
            <h3 className="title-fuxia mt-2">El blog de mamá</h3>
            <Container className="container-blog-home">
              <Row className="box-btn-blog">
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="btn-blog-home">
                    Tips para tu baby shower virtual
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="btn-blog-home">
                    Artículos básicos para tu baby shower
                  </div>
                </Col>
              </Row>
              <Row className="box-btn-blog">
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="btn-blog-home">
                    Mi bebé y su maleta para la clínica
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                   <div className="btn-blog-home">
                    El cuarto soñado para mi bebé
                  </div>
                </Col>
              </Row>
              <a href="/blog" className="ver-mas-home">Ver más &#8594;</a>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
