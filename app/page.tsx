"use client";

import React, {Dispatch, SetStateAction, useState} from "react";
import Input from "@/app/input";
import styled from "styled-components";
import Splitter from "@/app/splitter";
import {
  calculateBad,
  calculateBadPreviousVersion,
  isNewVersionScore,
  isPreviousVersionScore
} from "@/app/utils/calculator";

import "./i18n";

import {useTranslation} from "react-i18next";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 475px;
  margin: 0 auto;
    padding: 32px 0;
`;

export default function Home() {
  const {t} = useTranslation();
  const [score, setScore] = useState('');
  const [cool, setCool] = useState('');
  const [great, setGreat] = useState('');
  const [good, setGood] = useState('');
  const [bad, setBad] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
    setter(e.target.value);
  }

  const emptyBad = Number(bad) - calculateBad(Number(score), Number(cool), Number(great), Number(good));
  const emptyBadPreviousVersion = Number(bad) - calculateBadPreviousVersion(Number(score), Number(cool), Number(great), Number(good));

  return (
    <Container>
      <Input inputName={'SCORE'} onInput={(e) => handleInput(e, setScore)}
             color={'#ed5462'} tabIndex={1}/>
      <Input inputName={'COOL'} onInput={(e) => handleInput(e, setCool)}
             color={'#cd70eb'} tabIndex={2}/>
      <Input inputName={'GREAT'} onInput={(e) => handleInput(e, setGreat)}
             color={'#ebe470'} tabIndex={3}/>
      <Input inputName={'GOOD'} onInput={(e) => handleInput(e, setGood)}
             color={'#e8894f'} tabIndex={4}/>
      <Input inputName={'BAD'} onInput={(e) => handleInput(e, setBad)}
             color={'#5cade0'} tabIndex={5}/>
      <Splitter />
      {
        isNewVersionScore(Number(score), Number(cool), Number(great), Number(good)) && (
          <div>{t('공BAD n개', {n: emptyBad})}</div>
        )
      }
      {
        isPreviousVersionScore(Number(score), Number(cool), Number(great), Number(good)) && (
          <div>{t('구버전 공BAD n개', {n: emptyBadPreviousVersion})}</div>
        )
      }
    </Container>
  );
}
