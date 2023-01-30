import { Container } from "react-bootstrap";
import "./footer.css";
function Footer() {
  return (
    <div className="background">
      <Container>
        <div className="grid">
          <div className="logo">
            <img src="My Self Small.png" alt="logo"></img>
          </div>
          <div className="info">2st</div>
          <div className="info">3st</div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
