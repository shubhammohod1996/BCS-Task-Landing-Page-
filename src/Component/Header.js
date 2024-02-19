import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import logo from "../Images/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FiPhone style={{ marginRight: "5px" }} />
            <span> Call Us:+1 485 568 980 |</span>
            <MdOutlineMailOutline
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            <span>info@example.com</span>
          </div>
          <div style={{ display: "flex" }}>
            <FaFacebook style={{ margin: "0 5px" }} />
            <FaTwitter style={{ margin: "0 5px" }} />
            <FaInstagram style={{ margin: "0 5px" }} />
            <TfiYoutube style={{ margin: "0 5px" }} />
          </div>
        </div>
        <Navbar
          expand="lg"
          variant="light"
          bg="white"
          className="justify-content-between mt-1"
        >
          <Navbar.Brand>
            <img
              src={logo}
              alt="LAMIA"
              style={{
                maxWidth: "100px",
                maxHeight: "45px",
                marginLeft: "10px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/industries">Industries</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/get-quote" style={{ color: "gray" }}>
                Get a Quote <FaArrowRight />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
