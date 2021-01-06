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
import burger from ".././../assets/header/burger.svg";
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className=" justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={burger} alt="burger yesmom" className="burger-yesmom" />
        </Navbar.Toggle>

        <Navbar.Brand href="/" className="hover-efect">
          <img src={logo} alt="logo yesmom" className="logo-yesmom " />
        </Navbar.Brand>
        {/* <Nav.Link href="#link" className="item-navbar">
          <figure className="item-menu">
            <img src={cesta} alt="logo tienda yesmom" />
          </figure>
        </Nav.Link> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-form-search">
            <Button variant="">
              <img src={lupa} alt="lupa yesmom" className="lupa-img"/>
            </Button>
            <FormControl
              type="text"
              placeholder="¿Que es lo que buscas?"
              className="mr-sm-2 input-search"
            />
          </Form>
          <Nav className="nav-items-collapse">
            <NavLink to="/blog" className="item-navbar hover-efect"  activeClassName='is-active'>
              <figure className="item-menu ">
                <img src={blog} alt="logo blog yesmom " />
              </figure>
              <h6 className="">Blog</h6>
            </NavLink>
            <NavLink to="/pagina-en-construccion" className="item-navbar hover-efect"  activeClassName='is-active'>
              <figure className="item-menu">
                <img src={tienda} alt="logo tienda yesmom" />
              </figure>
              <h6>Tienda</h6>
            </NavLink>
            <NavLink to="/pagina-en-construccion" className="item-navbar hover-efect"  activeClassName='is-active'>
              <figure className="item-menu">
                <img src={regalo} alt="logo regalo yesmom" />
              </figure>
              <h6>Regalos</h6>
            </NavLink>
            {/* <Nav.Link href="#link" className="item-navbar">
              <img
                src={registrate}
                alt="logo regrístrate yesmom"
                className="item-menu"
              />
              <h6>Regístrate</h6>
            </Nav.Link> */}
            <NavLink to="/pagina-en-construccion" className="item-navbar hover-efect"  activeClassName='is-active'>
              <figure className="item-menu">
                <img src={iniciar} alt="logo iniciar sesión yesmom" />
              </figure>
              <h6>Login</h6>
            </NavLink>
            {/* <NavLink to="/cesta" className="item-navbar"  activeClassName='is-active'>
              <figure className="item-menu">
                <img src={cesta} alt="logo cesta yesmom" />
              </figure>
              <h6>Cesta</h6>
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
