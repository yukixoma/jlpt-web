import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useLocation } from "wouter";

// Section listing
const Section = ["漢字", "文法", "語彙"];
// Section in Eng
const SectionEng = ["kanji", "grammar", "vocabulary"];
// Style vars
const Variant = ["outline-warning", "outline-success", "outline-primary"];

export default function SectionSelection() {
  const [location, setLocation] = useLocation();
  // Create section list
  const Render = Section.map((section, index) => {
    return (
      <Container key={index} style={{ margin: 20 }}>
        <Col xs={{ span: 8, offset: 2 }}>
          <Button
            variant={Variant[index]}
            block
            onClick={() => {
              setLocation(`${location}/${SectionEng[index]}`);
            }}
          >
            <b>{section}</b>
          </Button>
        </Col>
      </Container>
    );
  });
  return <Container className="centered">{Render}</Container>;
}
