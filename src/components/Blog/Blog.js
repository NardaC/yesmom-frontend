import React, { Fragment, useEffect, useState } from "react";
import "./Blog.css";
import { Card, CardDeck, Container } from "react-bootstrap";
import ondas from "../../assets/onda-blanca.svg";
import blog1 from "../../assets/blog/blog1.png";
import fondo from "../../assets/blog/fondo-verde.png";
import CardBlog from "./CardBlog";
import clienteAxiosBusiness from "../../config/axiosBusiness"
const Blog = () => {
  const [currentData, setCurrentData]=useState([])
  
  const arrayBlog = async () => {
    await clienteAxiosBusiness.get('/getBlogAll/user?limit=all')
      .then((res) => {
        if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setCurrentData([]);
        } else {
          setCurrentData(res.data);
          console.log(res.data, "++++++judith-por vencer")
        }
        // setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }
  useEffect(() => {
    arrayBlog();
  }, [])
  return (
    <div className="fade-in animated">
      <div className="box-banner-blog">
        <img src={ondas} alt="ondas" className="ondas" />
        <h4 className="text-title-blog">Blog</h4>
        <img src={ondas} alt="ondas" className="ondas" />
      </div>
      <div className="box-blog-general">
        <h4 className="subtitle-dark-blog">
          En este espacio compartiremos algunos tips que te servirán para cuidar y
          engreir mucho más a tu bebé
      </h4>
        <div className="box-card-group">
          <Container>
            <CardDeck>
               {
                  currentData.map((cardBlog =>(
                    <CardBlog  blog={cardBlog}/>
                  )))
                }
              {/* <CardBlog/>
              <CardBlog/> */}
              {/* <Card className=" card-blog">
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                  <Card.Title>Tips para tu baby shower virtual</Card.Title>
                  <Card.Text>
                  ¿Tu Baby Shower se encuentra cada vez más cerca y tus seres queridos quieren celebrarlo contigo? Te dejamos unos consejos para disfrutar de una mejor manera tu baby shower virtual.
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
                  Si deseas realizar el mejor regalo de baby shower para una mamá primeriza, llegaste al lugar correcto. ¡Conoce los mejores regalos para bebés recién nacidos!
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
                  La mejor manera de pasar esta última etapa es permaneciendo tranquila y relajada. Te va a ayudar saber que tienes todo preparado para cuando llegue el gran momento. ¿Qué debo llevar al hospital en los bolsos maternales?
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
                  Elegir y decorar la habitación del bebé es uno de los preparativos más importantes si estás esperando a tu hijo/a. En el siguiente blog te damos algunas claves.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="/blog-especific">Leer más &#8594;</a>
                </Card.Footer>
              </Card> */}
            </CardDeck>
          </Container>
        </div>
      </div>
      <div className="box-green-blog">
        <img src={fondo} alt="" className="w-100 box-green-blog-img-fondo" />
        <h6 className="text-bottom-blog ">
          Para el mundo eres una mamá,<br></br>
          <b>para tus hijos eres el mundo</b>
        </h6>
      </div>
    </div>
  );
};

export default Blog;
