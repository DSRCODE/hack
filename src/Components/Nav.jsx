import React, { useState } from "react";
import { Navbar, Nav as BootstrapNav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Nav.css";
import logo from "../assets/Img/logof.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar
      // bg="dark"
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
            <NavDropdown.Item onClick={() => navigate("/sportDet")}>
              Cricket
            </NavDropdown.Item>
            <NavDropdown.Item href="#services">Football</NavDropdown.Item>
            <NavDropdown.Item href="#about">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="#about">Athelete</NavDropdown.Item>
            <NavDropdown.Item href="#about">Basket Ball</NavDropdown.Item>
            <NavDropdown.Item href="#about">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="#about">Golf</NavDropdown.Item>
            <NavDropdown.Item href="#about">Archery</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="custom-dropdown-title">Monitoring</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#service3">Association</NavDropdown.Item>
            <NavDropdown.Item href="#service3">Academy </NavDropdown.Item>
            <NavDropdown.Item href="#service3">Player</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="custom-dropdown-title">Orientation</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => navigate("/awareness")}>
              Awareness
            </NavDropdown.Item>
            <NavDropdown.Item href="#careers">Tranning</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Success Stories</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="custom-dropdown-title">Funds</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Association Funds</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Academy Funds</NavDropdown.Item>
            <NavDropdown.Item href="#careers">
              Players Scholarships
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <span className="custom-dropdown-title">Future & Scopes</span>
            }
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title={
              <span
                className="custom-dropdown-title"
                onClick={() => navigate("/playerform")}
              >
                Grievance
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="custom-dropdown-title">Sports Media</span>}
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title={
              <span className="custom-dropdown-title">
                {" "}
                <span style={{ color: "red" }}> Women</span> Empowerment
              </span>
            }
            id="basic-nav-dropdown"
            onClick={() => navigate("/empowerment")}
          ></NavDropdown>
        </BootstrapNav>
        <BootstrapNav className="mr-auto login-signup-part">
          <BootstrapNav.Link
            href="#login"
            onClick={() => navigate("/login")}
            className="btn-signup"
          >
            Login
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#signup"
            onClick={() => navigate("/signup")}
            className="btn-signup"
          >
            Signup
          </BootstrapNav.Link>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
