import React from "react";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div>

        </div>
        <Row>
          <Col xs={12} md={4}>
            <div className="padding-left text-left">
              <h6 className="tilte-footer">
                <b>CONTENIDO</b>
              </h6>
              <a href="/nosotros" ><p>Blog</p></a>
              <a href="/nosotros" ><p>Tienda</p></a>
              <a href="/nosotros" ><p>Regalos</p></a>
              <a href="/nosotros" ><p>Sobre nosotros</p></a>
              <a href="/nosotros" ><p>Términos y condiciones</p></a>
              <a href="/nosotros" ><p>Política de privacidad</p></a>
              <a href="/nosotros" ><p>Libro de reclamaciones</p></a>
            </div>
          </Col>
          <Col xs={12}  md={4}>
            <div className="padding-left text-center">
              <h6 className="tilte-footer">
                <b>CONTÁCTANOS</b>
              </h6>
              <p>mibebe@gmail.com</p>
              <p>3333333333</p>
              <p>123 Los Robles Miraflores</p>
            </div>
          </Col>
          <Col xs={12}  md={4} >
            <div className="padding-left text-center">
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
