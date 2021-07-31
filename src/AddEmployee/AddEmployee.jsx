import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import DynamicAdd  from "./DynamicAdd";
import "./form.css";
function AddEmployee() {
  return (
    <>
      <div className="form-container">
        <h1>Employee Registration Form</h1>
        <hr />
        <form action="">
          <Row className="mb-3">
            <Col>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </Col>
            <Col>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Address" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label htmlFor="">Date Of Birth</label>
              <input type="date" placeholder="Name" />
            </Col>
            <Col>
              <label htmlFor="">Gender</label> <label htmlFor="">Male</label>
              <input type="radio" placeholder="Gender" />
              <label htmlFor="">Female</label>
              <input type="radio" placeholder="Gender" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email Address" />
            </Col>
            <Col>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Phone Number" />
            </Col>
          </Row>
        </form>
        <DynamicAdd />
      </div>
    </>
  );
}
export default AddEmployee;
