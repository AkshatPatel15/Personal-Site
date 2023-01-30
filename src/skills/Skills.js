import { Col, Row } from "react-bootstrap";
import "./skills.css";
function Skills() {
  return (
    <div>
      <h3>My Skills</h3>
      <h6>I do all kind of neat stuff</h6>
      <Col className="skill">
        <Row>Hello</Row> <Row>Hello</Row>
        <Row>Hello</Row> <Row>Hello</Row>
      </Col>
    </div>
  );
}

export default Skills;
