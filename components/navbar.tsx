"use client"

import { ProductType } from "@/type";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUser, FaQuestionCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { SiLapce } from "react-icons/si";

const NavigationBar = ({panier}: ProductType) => {

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Détecte si on est en mode mobile
    };

    const handleScroll = () => {
      if (!isMobile && window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize(); // Vérifie la taille au chargement

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);


  useEffect(() => {
    console.log("Panier mis à jour:", panier);
  }, [panier])

  return (
    <Navbar bg="light" expand="lg" className={`p-3 fixed-top ${scrolled ? "bg-light shadow" : "bg-transparent"}`}
    style={{ transition: "background-color 50s ease-in-out" }}>
      <Container className="">
        {/* Logo ou nom de l"app */}
        <Navbar.Brand href="#"  className="h1 fw-bold" >Achi
                      <span className="text-warning fw-bold">Oni</span>
                      <SiLapce className="me-3" />
                  </Navbar.Brand>
        
        {/* Bouton pour le menu en version mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Contenu du menu */}
        <Navbar.Collapse id="basic-navbar-nav" className="text-warning fw-bold">
          <Nav className="me-auto text-warning">
            <Nav.Link href="/accueil">Accueil</Nav.Link>
            <Nav.Link href="#">Produits</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Partie à aligner à droite */}
          <div className="d-flex align-items-center ms-auto">
            {/* Dropdown */}
            <NavDropdown title="Aide" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about"><FaQuestionCircle className="me-2 text-warning" /> A propos</NavDropdown.Item>
              <NavDropdown.Item href="/faq">
                <FaQuestionCircle className="me-2 text-warning" /> FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="/terms">
                Condition Générale
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/support">
                Support
              </NavDropdown.Item>
            </NavDropdown>

            {/* Icônes et liens */}
            <Nav.Link href="#link" className="mx-3">
              <FaUser size={20} />
            </Nav.Link>


            {panier && <Nav.Link href="/panier" className="mx-3 position-relative">
              <TiShoppingCart size={22} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {panier?.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Nav.Link>}

            {/* Boutons d"inscription et connexion */}
            <Nav.Link 
              href="/clients/users/acheteur" 
              className="btn btn-outline-warning text-dark custom-btn p-2 ">S'inscrire
            </Nav.Link>
            <Nav.Link href="/clients/login" className="btn bg-warning text-light p-1 ms-3">Se connecter</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
