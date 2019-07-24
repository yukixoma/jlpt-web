import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useLocation } from "wouter";
import { LessonList } from "./KanjiRouter";

export default function Kanji() {
  const [location, setLocation] = useLocation();
  const Render = LessonList.map((lesson, index) => (
    <Row style={{ paddingTop: 20 }} key={index}>
      <Button
        variant="outline-warning"
        block
        onClick={() => setLocation(`${location}/${lesson}`)}
      >
        Lesson {lesson}
      </Button>
    </Row>
  ));
  return (
    <Container>
      <Col md={{ span: 4, offset: 4 }}>{Render}</Col>
    </Container>
  );
}
