import React, { Fragment } from "react";

import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import banner from "../../assets/home/banner.png";
import bannerM from "../../assets/home/banner-mobile.png";
import sorteo from "../../assets/home/img-sorteo-home.png";
import ondas from "../../assets/ondas.svg";
import lineas1 from "../../assets/lineas-rosa1.svg";
import lineas2 from "../../assets/linea-rosa2.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import nube from "../../assets/home/nube.svg";
import destacado from "../../assets/home/destacado.png";
import buscado from "../../assets/home/buscado.png";
import sinMoverte from "../../assets/home/sin-moverte.png";
import juguetes from "../../assets/home/juguetes.png";
import ondaRosa from "../../assets/onda-rosa.svg";
import blog from "../../assets/home/img-blog-home.png";
import blog1 from "../../assets/blog/blog1.png";
import lineasAzul1 from "../../assets/lineas-azul1.svg";
import lineasAzul2 from "../../assets/lineas-azul2.svg";

const Home = () => {
  return (
    <div className="fade-in animated">
      <section fluid="true" className="box-banner">
        <img src={banner} className="banner view-desktop" />
        <img src={bannerM} alt="" className="banner view-mobile" />
        <div className="box-banner-btns">
          <div className="box-banner-btns-group">
            <h3 className="title-fuxia w-80 m-auto">
              Encuentra tu regalo soñado
            </h3>
            <img src={ondas} alt="ondas" className="ondas d-block m-auto heartbeat" />
            <div className="box-banner-regalos">
              <div className="btn-regalos bg-azul">Crear lista de regalos</div>
              <div className="btn-regalos">Buscar lista de regalos</div>
            </div>
            <p className="link-a text-center">
              ¿Ya registrado? <b>Inicia sesión</b>{" "}
            </p>
          </div>
        </div>
      </section>
      <Container fluid="true" className="section-sorteo-home">
        <Row className="sin-margin">
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-text-title">
              <img src={ondas} alt="ondas" className="ondas heartbeat" />
              <h4 className="text-title">Sorteo</h4>
              <img src={ondas} alt="ondas" className="ondas heartbeat" />
            </div>
            <div className="box-sorteo-home">
              <h3 className="title-fuxia">Gana un pack Yes Mom</h3>
              <h6 className="subtitle-dark">
                Crea una lista de regalo y gana un pack de productos para ti y
                tu bebé
              </h6>
              <div className="btn-yellow">¡Comenzar!</div>
              <a className="link-a">*Términos y condiciones</a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-img-sorteo-home">
              <img src={lineas1} alt="lineas " className="line-up heartbeat" />
              <img
                src={sorteo}
                alt="imagen sorteo yesmom home"
                className="img-sorteo"
              />
              <img src={lineas2} alt="lineas " className="line-down heartbeat" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid="true" className="section-lo-mejor-home">
        <img src={nube} alt="nube yesmom" className="nube-up" />
        <div className="box-title-lo-mejor-home">
          <FontAwesomeIcon icon={faStar} className="heartbeat"></FontAwesomeIcon>
          <h3 className="title-fuxia">Lo mejor para tu bebé</h3>
          <FontAwesomeIcon icon={faStar} className="heartbeat"></FontAwesomeIcon>
        </div>
        <img src={ondaRosa} alt="onda rosa yes mom" className="onda-rosa heartbeat" />
        <Row className="box-img-lo-mejor">
          <Col xs>
            <div className="img-lo-mejor">
              <img src={destacado} alt="" />
            </div>
            <div className="btn-lo-mejor">Tiendas destacadas</div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={buscado} alt="" />
            </div>
            <div className="btn-lo-mejor bg-fuxia">
              Lo + <br></br> buscado
            </div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={sinMoverte} alt="" />
            </div>
            <div className="btn-lo-mejor bg-verde">Sin moverte de casa</div>
          </Col>
          <Col xs>
            <div className="img-lo-mejor">
              <img src={juguetes} alt="" />
            </div>
            <div className="btn-lo-mejor bg-azul">Juguetes</div>
          </Col>
        </Row>
        <img src={nube} alt="nube yesmom" className="nube-down" />
      </Container>
      <Container fluid="true" className="section-blog-home">
        <Row className="sin-margin">
          {/* <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-img-blog-home">
              <img src={lineasAzul1} alt="lineas" className="line-up-azul" />
              <img
                src={blog}
                alt="imagen blog yesmom home"
                className="img-blog"
              />
              <img src={lineasAzul2} alt="lineas" className="line-down-azul" />
            </div>
          </Col> */}
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-true-history">
              <div className="box-text-title">
                <img src={ondas} alt="ondas" className="ondas" />
                <h4 className="text-title">Blog</h4>
                <img src={ondas} alt="ondas" className="ondas" />
              </div>
              <h3 className="title-fuxia mt-2">#TrueStoryMom</h3>
              <Container className="container-blog-home">
                <h6 className="subtitle-dark text-center">
                  Historias reales de madres que tenían las mismas dudas que tú
                  tienes en estos momentos. No te preocupes ¡Lo resolveremos
                  juntas!
                </h6>
                <div className="btn-yellow">Ver más</div>
                {/* <a href="/blog" className="link-a d-block text-center mt-4">
                  Ver más &#8594;
                </a> */}
              </Container>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} className="box-blog-card-home">
            <Container>
              <CardDeck>
                <Card className=" card-blog">
                  <Card.Img variant="top" src={blog1} />
                  <Card.Body>
                    <Card.Title>Tips para tu baby shower virtual</Card.Title>
                    <Card.Text>
                      ¿Tu Baby Shower se encuentra cada vez más cerca y tus
                      seres queridos quieren celebrarlo contigo? Te dejamos unos
                      consejos para disfrutar de una mejor manera tu baby shower
                      virtual.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <a href="/blog-especific">Leer más &#8594;</a>
                  </Card.Footer>
                </Card>
                <Card className=" card-blog">
                  <Card.Img variant="top" src={blog1} />
                  <Card.Body>
                    <Card.Title>
                      Artículos básicos para tu baby shower
                    </Card.Title>
                    <Card.Text>
                      Si deseas realizar el mejor regalo de baby shower para una
                      mamá primeriza, llegaste al lugar correcto. ¡Conoce los
                      mejores regalos para bebés recién nacidos!
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <a href="/blog-especific">Leer más &#8594;</a>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
