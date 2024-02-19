import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../Images/AboutPhoto.png";
import { IoIosPeople } from "react-icons/io";

const About = () => {
  return (
    <div style={{ margin: "100px" }}>
      <Container className="g-col-6">
        <Row>
          {/* Left side with an image */}
          <Col md={6}>
            <img
              src={Images}
              alt="shubham"
              style={{ height: "350px", width: "80%", marginLeft: "80px" }}
            />
          </Col>

          {/* Right side with text, titles, and icons */}
          <Col md={6}>
            <p style={{ color: "rgb(168,226,173)", fontSize: "12px" }}>
              ABOUT LAMIA ---
            </p>
            <h3>Trust That You're Working</h3>
            <h3>The Best Accountants</h3>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do
              eius mod temp incididunt ut labore.Lorem ipsum dolor sit amet
            </p>

            {/* Two columns with title and text */}
            <Row>
              <Col>
                <h6>Professional Consultants</h6>
                <p style={{ fontSize: "12px" }}>
                  Contrary to popular belief,Lorem ipsum is not siom text .
                </p>
              </Col>
              <Col>
                <h6>Quality Service Provide</h6>
                <p style={{ fontSize: "12px" }}>
                  Contrary to popular belief,Lorem ipsum is not siom text .
                </p>
              </Col>
            </Row>

            {/* Icon, title, and text */}
            <Row className="d-flex justify-content-around align-items-center">
              <IoIosPeople
                style={{
                  height: "80px",
                  width: "80px",
                  backgroundColor: "#F6F6F6",
                  color: "#8CBC43",
                }}
              />
              <Col>
                <h6>Most of The People Choose Lamia</h6>
                <p style={{ fontSize: "12px" }}>
                  Contrary to popular belief,LoremContrarybelief,Lorem ipsum is
                  not siom text .
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
