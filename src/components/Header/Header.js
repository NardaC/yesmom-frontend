import React from "react";

import "./Header.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logo from ".././../assets/header/logo-yesmom.svg";
import lupa from ".././../assets/header/lupa.svg";
import blog from ".././../assets/header/blog.svg";
import tienda from ".././../assets/header/tienda.svg";
import regalo from ".././../assets/header/regalo.svg";
import registrate from ".././../assets/header/registrate.svg";
import iniciar from ".././../assets/header/iniciar-sesion.svg";
import cesta from ".././../assets/header/cesta.svg";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className=" justify-content-between">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo yesmom" className="logo-yesmom" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <Button variant="">
              <img src={lupa} alt="" />
            </Button>
            <FormControl
              type="text"
              placeholder="¿Que es lo que buscas?"
              className="mr-sm-2 input-search"
            />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="item-navbar">
              <figure className="item-menu">
                <img src={blog} alt="logo blog yesmom" />
              </figure>
              <h6>Blog</h6>
            </Nav.Link>
            <Nav.Link href="#link" className="item-navbar">
              <figure className="item-menu">
                <img src={tienda} alt="logo tienda yesmom" />
              </figure>
              <h6>Tienda</h6>
            </Nav.Link>
            <Nav.Link href="#home" className="item-navbar">
              <figure className="item-menu">
                <img src={regalo} alt="logo regalo yesmom" />
              </figure>
              <h6>Regalos</h6>
            </Nav.Link>
            {/* <Nav.Link href="#link" className="item-navbar">
              <img
                src={registrate}
                alt="logo regrístrate yesmom"
                className="item-menu"
              />
              <h6>Regístrate</h6>
            </Nav.Link> */}
            <Nav.Link href="#home" className="item-navbar">
              <figure className="item-menu">
                <img src={iniciar} alt="logo iniciar sesión yesmom" />
              </figure>
              <h6>Login</h6>
            </Nav.Link>
            <Nav.Link href="#link" className="item-navbar">
              <figure className="item-menu">
                <img src={cesta} alt="logo cesta yesmom" />
              </figure>
              <h6>Cesta</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
