import React from "react";
import { useLocation } from "wouter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

// JLPT's level listing
const Level = ["N1", "N2", "N3", "N4", "N5"];
// Style vars
const Varian = [
  "outline-danger",
  "outline-warning",
  "outline-success",
  "outline-primary",
  "outline-info"
];

export default function LevelChoose() {
  const [location, setLocation] = useLocation();
  // create list of level
  const Render = Level.map((level, index) => {
    return (
      <Container key={index} style={{margin: 20}}>
        <Col xs={{ span: 8, offset: 2 }}>
          <Button
            block
            variant={Varian[index]}
            onClick={() => setLocation(`/${level}`)}
          >
            <b>{level}</b>
          </Button>
        </Col>
      </Container>
    );
  });
  return <Container className="centered">{Render}</Container>;
}
