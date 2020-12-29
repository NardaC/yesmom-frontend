import React from 'react';
import { Card, CardDeck, Container } from "react-bootstrap";
import blog1 from "../../assets/blog/blog1.png";

const CardBlog = () => {
    return (
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
    )
}

export default CardBlog
