import React from "react";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col >
            <div className="pl-10 text-left">
              <h6 className="tilte-footer">
                <b>CONTENIDO</b>
              </h6>
              <p>Blog</p>
              <p>Tienda</p>
              <p>Regalos</p>
              <p>Regalos</p>
              <a href="/nosotros" ><p>Sobre nosotros</p></a>
              <p>Términos y condiciones</p>
              <p>Libro de reclamaciones</p>
              <p>Política de privacidad</p>
            </div>
          </Col>
          <Col >
            <div className="pl-10 text-center">
              <h6 className="tilte-footer">
                <b>CONTÁCTANOS</b>
              </h6>
              <p>mibebe@gmail.com</p>
              <p>3333333333</p>
              <p>123 Los Robles Miraflores</p>
            </div>
          </Col>
          <Col >
            <div className="pl-10 text-center">
              <h6 className="tilte-footer">
                <b>SÍGUENOS</b>
              </h6>
              <FontAwesomeIcon icon={faFacebookF} className="icon-redes"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter} className="icon-redes"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram} className="icon-redes"></FontAwesomeIcon>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
