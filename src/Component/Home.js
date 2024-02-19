import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PiGraphFill } from "react-icons/pi";
import { GiCash } from "react-icons/gi";
import { GiNetworkBars } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage:
            'url("https://w0.peakpx.com/wallpaper/375/905/HD-wallpaper-top-view-of-buildings-during-night-time.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h4>Achieve Financial Success with</h4>
          <h1>Our Expert CPA Services</h1>
          <br />
          <p>
            Your Trusted Partner for Tax,Accounting,and Business Advisory
            Solutions
          </p>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#8CBC43",
              border: "none",
              padding: "10px",
            }}
          >
            Discover More <FaLongArrowAltRight style={{ marginLeft: "5px" }} />
          </Button>
        </div>
      </div>
      {/* </Container> */}

      <div style={{ height: "45vh", backgroundColor: "#8CBC43" }}>
        <Container className="d-flex justify-content-around align-items-center h-100  column-gap-3 ">
          {/* Card 1 */}
          <Card
            style={{ width: "18rem", height: "200px", marginBottom: "150px" }}
          >
            <Card.Body>
              <LiaBusinessTimeSolid
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                  color: "#8CBC43",
                }}
              />
              <Card.Title>
                <h4>Market Analysis & Research</h4>
              </Card.Title>
              <FaCircleArrowRight
                style={{
                  fontSize: "30px",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              />
            </Card.Body>
          </Card>

          {/* Card 2 */}
          <Card
            style={{ width: "18rem", height: "200px", marginBottom: "150px" }}
          >
            <Card.Body>
              <PiGraphFill
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                  color: "#8CBC43",
                }}
              />
              <Card.Title>
                <h4>Business Share Consulting</h4>
              </Card.Title>
              <FaCircleArrowRight
                style={{
                  fontSize: "30px",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              />
            </Card.Body>
          </Card>

          {/* Card 3 */}
          <Card
            style={{ width: "18rem", height: "200px", marginBottom: "150px" }}
          >
            <Card.Body>
              <GiNetworkBars
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                  color: "#8CBC43",
                }}
              />
              <Card.Title>
                <h4>
                  Financial Growth <br /> & Planning
                </h4>
              </Card.Title>
              <FaCircleArrowRight
                style={{
                  fontSize: "30px",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              />
            </Card.Body>
          </Card>

          {/* Card 4 */}
          <Card
            style={{ width: "18rem", height: "200px", marginBottom: "150px" }}
          >
            <Card.Body>
              <GiCash
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                  color: "#8CBC43",
                }}
              />
              <Card.Title>
                <h4>Capital Wealth Management</h4>
              </Card.Title>
              <FaCircleArrowRight
                style={{
                  fontSize: "30px",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              />
            </Card.Body>
          </Card>
        </Container>
        <div style={{ backgroundColor: "#8CBC43", marginBottom: "0px" }}>
          <p
            className="d-flex justify-content-center"
            style={{ color: "white" }}
          >
            Here are Our best Services and Methods for business
            <span style={{ color: "black", marginLeft: "5px" }}>
              More Services
              <FaLongArrowAltRight style={{ marginLeft: "5px" }} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
