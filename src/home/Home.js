import "../App.css";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_hight"
            src="slider1.avif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_hight"
            src="slider1.avif"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_hight"
            src="slider1.avif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    // <Container>
    //   <Row className="box">
    //     <Col className="text">
    //       <div>
    //         <h6>Hello !</h6>
    //         <h1>I'M AKSHAT PATEL</h1>
    //         <p>We shape and activate brands through</p>
    //         <p>insight,vision and excution</p>
    //         <Button>Hire Me</Button>
    //       </div>
    //     </Col>
    //     <Col className="img">
    //       <img src="akshat.png" height={500} width={400} />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Home;
