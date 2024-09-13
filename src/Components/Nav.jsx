import React, { useState } from "react";
import { Navbar, Nav as BootstrapNav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Nav.css";
import logo  from "../assets/Img/logof.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
      className="Navbar-parent"
    >
      <Navbar.Brand href="#home" className="ml-auto  navBar-logo">
        <img src={logo} alt="" className="logo-nav" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="Navbar-items">
        <BootstrapNav className="ml-auto  navbar-content">
          <NavDropdown
            title={<span className="custom-dropdown-title">Sports</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#home">Cricket</NavDropdown.Item>
            <NavDropdown.Item href="#services">Services</NavDropdown.Item>
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="custom-dropdown-title">Monitoring</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="custom-dropdown-title">Orientation</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="custom-dropdown-title">Funds</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <span className="custom-dropdown-title">Future & Scopes</span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="custom-dropdown-title">Grievance</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="custom-dropdown-title">Sports Media</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <span className="custom-dropdown-title">
                {" "}
                <span style={{ color: "yellow" }}> Women</span> Empowerment
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
        </BootstrapNav>
        <BootstrapNav className="mr-auto login-signup-part">
          <BootstrapNav.Link href="#login" onClick={()=>navigate("/login")} className="btn-signup">
            Login
          </BootstrapNav.Link>
          <BootstrapNav.Link href="#signup" onClick={()=>navigate("/signup")}  className="btn-signup">
            Signup
          </BootstrapNav.Link>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
