import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./MyService.css";

function MyService() {
  return (
    <div className="portfolio">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="nlp-image-scaled.jpeg" />
        <Card.Body>
          <Card.Title>Text Summerization using NLP</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="django.webp" />
        <Card.Body>
          <Card.Title>Django Development</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="tax.jpeg" />
        <Card.Body>
          <Card.Title>US Tax prediction</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyService;
