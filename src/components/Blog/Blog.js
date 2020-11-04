import React from "react";

import "./Blog.css";

import { Card, CardDeck, Container } from "react-bootstrap";
import ondas from "../../assets/onda-blanca.svg";
import blog1 from "../../assets/blog/blog1.png";
import fondo from "../../assets/blog/fondo-verde.png";

const Blog = () => {
  return (
    <>
      <div className="box-banner-blog">
        <img src={ondas} alt="ondas" className="ondas" />
        <h4 className="text-title-blog">Sorteo</h4>
        <img src={ondas} alt="ondas" className="ondas" />
      </div>
      <h4 className="subtitle-dark-blog">
        En este espacio compartiremos algunos tips que te servirán para cuidar y
        engreir mucho más a tu bebé
      </h4>
      <div className="box-card-group">
        <Container>
          <CardDeck>
            <Card className=" card-blog">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>Tips para tu baby shower virtual</Card.Title>
                <Card.Text>
                  Te damos estos consejos para que todo salga increíble.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="/blog-especific">Leer más &#8594;</a>
              </Card.Footer>
            </Card>
            <Card className=" card-blog">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>Artículos básicos para tu baby shower</Card.Title>
                <Card.Text>
                  ¿Estás por celebrar tu baby shower y no sabes qué artículos
                  poner en tu listade regalos? Nosotros te ayudamos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="/blog-especific">Leer más &#8594;</a>
              </Card.Footer>
            </Card>
            <Card className=" card-blog">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>Mi bebé y su maleta para la clínica</Card.Title>
                <Card.Text>
                  ¿Sabes qué cosas vas a necesitar cuando vayas a la clínica con
                  tu bebé?. Te dejamos algunas ideas que pueden servirte en esos
                  momentos de indecisión.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="/blog-especific">Leer más &#8594;</a>
              </Card.Footer>
            </Card>
            <Card className=" card-blog">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>El cuarto soñado para mi bebé</Card.Title>
                <Card.Text>
                  Faltan pocos meses para recibir al nuevo integrante de la
                  familia y tú todavía estás dándole vuelta a la decoración de
                  su dormitorio. Te ayudamos con algunas ideas.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="/blog-especific">Leer más &#8594;</a>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
      <div className="box-green-blog">
        <img src={fondo} alt="" className="w-100" />
        <h6 className="text-bottom-blog">
          para el mundo eres una mamá,<br></br>
          <b>para tus hijos eres el mundo</b>
        </h6>
      </div>
    </>
  );
};

export default Blog;
