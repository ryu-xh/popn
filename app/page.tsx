"use client";

import React, {Dispatch, SetStateAction, useState} from "react";
import Input from "@/app/input";
import styled from "styled-components";
import Splitter from "@/app/splitter";
import {calculateBad, calculateScore} from "@/app/utils/calculator";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 475px;
  margin: 0 auto;
`;

export default function Home() {
  const [score, setScore] = useState('');
  const [cool, setCool] = useState('');
  const [great, setGreat] = useState('');
  const [good, setGood] = useState('');
  const [bad, setBad] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
    setter(e.target.value);
  }

  return (
    <Container>
      <Input inputName={'SCORE'} onInput={(e) => handleInput(e, setScore)}
             color={'#ed5462'} />
      <Input inputName={'COOL'} onInput={(e) => handleInput(e, setCool)}
             color={'#cd70eb'} />
      <Input inputName={'GREAT'} onInput={(e) => handleInput(e, setGreat)}
             color={'#ebe470'} />
      <Input inputName={'GOOD'} onInput={(e) => handleInput(e, setGood)}
             color={'#e8894f'} />
      <Input inputName={'BAD'} onInput={(e) => handleInput(e, setBad)}
             color={'#5cade0'} />
      <Splitter />
      <div>공배드 {Number(bad) - calculateBad(Number(score), Number(cool), Number(great), Number(good))}</div>
    </Container>
  );
}
