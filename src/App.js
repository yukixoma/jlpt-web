import React from "react";
import { Route, Switch, useLocation } from "wouter";
import { LevelChoose, SectionChoose, KanjiRouter } from "./screen/SreensExport";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

export default function App() {
  const [location, setLocation] = useLocation();
  return (
    <Container>
      <Switch>
        <Route path="/" component={LevelChoose} />
        <Route path="/:level" component={SectionChoose} />

        <Route path="/N2/kanji" component={KanjiRouter} />
        <Route path="/N2/kanji/:lesson" component={KanjiRouter} />

        <Route path="/:rest*/:section" component={UnderconstructPage} />
      </Switch>

      <Container style={{ marginTop: 25 }}>
        <Navbar fixed="bottom" bg="light" variant="dark">
          <div className="centered-v">
            <Button
              onClick={() => {
                setLocation("/");
              }}
              variant="outline-info"
            >
              Home
            </Button>
          </div>
        </Navbar>
      </Container>
    </Container>
  );
}

const UnderconstructPage = () => {
  const [location, setLocation] = useLocation();
  return (
    <Container style={{ paddingTop: 100, textAlign: "center" }}>
      <Col xs={{ span: 8, offset: 2 }}>
        <Alert variant="danger">Under construction </Alert>
        <Button
          onClick={() => {
            setLocation("/");
          }}
        >
          Back to Homepage
        </Button>
      </Col>
    </Container>
  );
};
