import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const OnKunToggle = Kanji => {
  return (
    <Accordion>
      <Accordion.Toggle as={Container} variant="link" eventKey="0">
        <Col
          xs={{ span: 8, offset: 2 }}
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <Button variant="outline-warning" block>
            音・訓よみ
          </Button>
        </Col>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <ListGroup>
          <ListGroup.Item variant="warning">音</ListGroup.Item>
          <ListGroup.Item>{Kanji.Onyomi}</ListGroup.Item>
          <ListGroup.Item variant="warning">訓</ListGroup.Item>
          <ListGroup.Item>{Kanji.Kunyomi}</ListGroup.Item>
        </ListGroup>
      </Accordion.Collapse>
    </Accordion>
  );
};

export const DetailToggle = Kanji => {
  return (
    <Accordion>
      <Accordion.Toggle as={Container} variant="link" eventKey="0">
        <Col
          xs={{ span: 8, offset: 2 }}
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <Button variant="outline-primary" block>
            詳細
          </Button>
        </Col>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <ListGroup>
          <ListGroup.Item variant="success">Lục thư</ListGroup.Item>
          <ListGroup.Item>{Kanji.LucThu}</ListGroup.Item>
          <ListGroup.Item variant="danger">Bộ chỉ âm</ListGroup.Item>
          <ListGroup.Item>{Kanji.BoChiAm}</ListGroup.Item>
          <ListGroup.Item variant="warning">Bộ thủ</ListGroup.Item>
          <ListGroup.Item>{Kanji.BoThu}</ListGroup.Item>
          <ListGroup.Item variant="primary">Ghi chú</ListGroup.Item>
          <ListGroup.Item>{Kanji.GhiChu}</ListGroup.Item>
        </ListGroup>
      </Accordion.Collapse>
    </Accordion>
  );
};

