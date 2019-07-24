import React from "react";
import Container from "react-bootstrap/Container";
import FlashCard from "./FlashCard";
import { Route } from "wouter";
import { Kanji as KanjiProcess } from "../../data/Process";
import Kanji from "./Kanji";

export const LessonList = [1, 2];

const KanjiRouter = () => {
  return (
    <Container>
      <Route path="/N2/kanji" component={Kanji} />
      <Route path="/:level/kanji/:lesson">
        {params => (
          <FlashCard KanjiList={KanjiProcess(params.level, params.lesson)} />
        )}
      </Route>
    </Container>
  );
};

export default KanjiRouter;
