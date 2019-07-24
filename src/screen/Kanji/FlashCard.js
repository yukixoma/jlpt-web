import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";

import { OnKunToggle, DetailToggle } from "./Toggle";

export default function FlashCard(props) {
  const { KanjiList } = props;
  return (
    <Carousel
      slide={false}
      indicators={false}
      style={{ textAlign: "center", marginTop: 20 }}
    >
      {KanjiList.map((kanji, index) => {
        const { Don, Phuc } = kanji.TuVung;
        const DonFurigana = Don.map(e => e.furigana);
        const PhucFurigana = Phuc.map(e => e.furigana);
        return (
          <Carousel.Item key={index}>
            <Card border="warning">
              <Card.Header>{index + 1}</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 style={{ fontFamily: "Guoyu", fontSize: 100 }}>
                    {kanji.Kanji}
                  </h1>
                </Card.Title>
                <ListGroup>
                  <ListGroup.Item variant="danger">
                    <span style={{ fontFamily: "Lobster", fontSize: 20 }}>
                      HÁN VIỆT
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ textTransform: "uppercase", fontSize: 18 }}
                  >
                    <b>{kanji.HanViet}</b>
                  </ListGroup.Item>
                  <ListGroup.Item variant="primary">
                    <span style={TitleStyle}> 語彙 </span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={GoiStyle}
                    dangerouslySetInnerHTML={{
                      __html: DonFurigana.join("、")
                    }}
                  />
                  <ListGroup.Item
                    style={GoiStyle}
                    dangerouslySetInnerHTML={{
                      __html: PhucFurigana.join("、")
                    }}
                  />
                  {/* 
                    Toggle Button
                  */}
                  {OnKunToggle(kanji)}
                  {DetailToggle(kanji)}
                </ListGroup>
              </Card.Body>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

const TitleStyle = {
  fontFamily: "Guoyu",
  fontSize: 30
};

const GoiStyle = {
  fontFamily: "Guoyu",
  fontSize: 26,  
};
