import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Img1 from "../Images/img1.png";
import Img2 from "../Images/img2.png";
import Img3 from "../Images/img3.png";
import Img4 from "../Images/img4.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* Top Div */}
        <Col md={12} className="bg-light p-4 ">
          <Row>
            <Col md={6} className="border-end">
              <p style={{ fontSize: "13px", color: "rgb(168,226,173)" }}>
                OUR SERVICES---
              </p>
              <h4 className="fw-bold">
                Comprehensive CPA Services
                <br />
                to Propel Your Business Forward
              </h4>
            </Col>
            <Col md={6}>
              <p style={{ fontSize: "10px", marginTop: "30px" }}>
                Our tailor-made solusition are designed to meet <br />
                your unique financial needs{" "}
                <span style={{ color: "#8CBC43", marginLeft: "5px" }}>
                  More Services
                  <FaLongArrowAltRight style={{ marginLeft: "5px" }} />
                </span>
              </p>
            </Col>
          </Row>
        </Col>
        {/* Middle Div */}
        <Col md={12}>
          <Row className="justify-content-center">
            {/* Image 1 */}
            <Col md={3}>
              <img
                src={Img1}
                alt="pankajimg"
                className="img-fluid mb-3"
                style={{ height: "230px", width: "280px" }}
              />
              <Card
                className="shadow border-0"
                style={{ height: "240px", width: "250px" }}
              >
                <Card.Body>
                  <h5 className="fw-bold">Strategic Tax Planning</h5>
                  <p style={{ color: "gray" }}>
                    Maximize your savings with our proactive tax planning
                    strategies tailored to your indi vidual business needs.
                  </p>
                  <Button
                    variant="outline-secondary "
                    style={{
                      marginLeft: "140px",
                      marginTop: "60px",
                      backgroundColor: "#8CBC43",
                    }}
                  >
                    &#62;
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Image 2 */}
            <Col md={3}>
              <img
                src={Img2}
                alt="mohod"
                className="img-fluid mb-3"
                style={{ height: "230px", width: "280px" }}
              />
              <Card
                className="shadow border-0"
                style={{ height: "240px", width: "250px" }}
              >
                <Card.Body>
                  <h5 className="fw-bold">Accounting & Bookkeeping</h5>
                  <p style={{ color: "gray" }}>
                    Stay on top of your financials with accurate and timely
                    Bookkeeping service that help your business thrive .
                  </p>
                  <Button
                    variant="outline-secondary "
                    style={{
                      marginLeft: "140px",
                      marginTop: "35px",
                      backgroundColor: "#8CBC43",
                    }}
                  >
                    &#62;
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Image 3 */}
            <Col md={3}>
              <img
                src={Img3}
                alt="ramteke"
                className="img-fluid mb-3"
                style={{ height: "230px", width: "280px" }}
              />
              <Card
                className="shadow border-0"
                style={{ height: "240px", width: "250px" }}
              >
                <Card.Body>
                  <h5 className="fw-bold">Payroll Services</h5>
                  <p style={{ color: "gray" }}>
                    Simplify your Payroll process with our efficent and reiable
                    payroll management solutions.
                  </p>
                  <Button
                    variant="outline-secondary "
                    style={{
                      marginLeft: "140px",
                      marginTop: "85px",
                      backgroundColor: "#8CBC43",
                    }}
                  >
                    &#62;
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Image 4 */}
            <Col md={3}>
              <img
                src={Img4}
                alt="akib"
                className="img-fluid mb-3"
                style={{ height: "230px", width: "280px" }}
              />
              <Card
                className="shadow border-0"
                style={{ height: "240px", width: "250px" }}
              >
                <Card.Body>
                  <h5 className="fw-bold">Business Advisory</h5>
                  <p style={{ color: "gray" }}>
                    Get valuable insights and expert guidance to make informed
                    decisionsfor your business' growth and success.{" "}
                  </p>
                  <Button
                    variant="outline-secondary "
                    style={{
                      marginLeft: "140px",
                      marginTop: "60px",
                      backgroundColor: "#8CBC43",
                    }}
                  >
                    &#62;
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Bottom Div */}
        <Col md={12} className="bg-white p-4">
          <Row>
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
