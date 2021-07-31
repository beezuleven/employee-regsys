import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Navbar.css";
function Navbar() {
  return (
    <Container>
      <div>
        <nav className="navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Employee
            </Link>
            <Link className="btn" to="/addEmployee">
              Add Employee
            </Link>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar;
