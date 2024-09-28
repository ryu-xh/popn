"use client";

import React, {Dispatch, SetStateAction, useState} from "react";
import Input from "@/app/input";
import styled from "styled-components";
import Splitter from "@/app/splitter";
import {
  calculateBad,
  calculateBadPreviousVersion, calculateScore, calculateScorePreviousVersion,
  isNewVersionScore,
  isPreviousVersionScore
} from "@/app/utils/calculator";
import {Noto_Sans_KR, Noto_Sans_JP} from "next/font/google";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], display: 'swap' });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], display: 'swap' });

import "./i18n";

import {useTranslation} from "react-i18next";
import ResultText from "@/app/resultText";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 475px;
  margin: 0 auto;
  padding: 24px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px;
  text-align: center;
  
  @media (max-width: 475px) {
    font-size: 2rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
  
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

  const caculatedScore = calculateScore(Number(cool), Number(great), Number(good), Number(bad));
  const calculatedScorePreviousVersion = calculateScorePreviousVersion(Number(cool), Number(great), Number(good), Number(bad));

  const emptyBad = Number(bad) - calculateBad(Number(score), Number(cool), Number(great), Number(good));
  const emptyBadPreviousVersion = Number(bad) - calculateBadPreviousVersion(Number(score), Number(cool), Number(great), Number(good));

  return (
    <Container>
      <Title className={[notoSansKR.className, notoSansJP.className].join(" ")}>{t('스코어 계산기')}</Title>

      <Input inputName={'SCORE'} onInput={(e) => handleInput(e, setScore)}
             color={'#ed5462'} tabIndex={1} value={score} />
      <Input inputName={'COOL'} onInput={(e) => handleInput(e, setCool)}
             color={'#cd70eb'} tabIndex={2} value={cool} />
      <Input inputName={'GREAT'} onInput={(e) => handleInput(e, setGreat)}
             color={'#d8d269'} tabIndex={3} value={great} />
      <Input inputName={'GOOD'} onInput={(e) => handleInput(e, setGood)}
             color={'#e8894f'} tabIndex={4} value={good} />
      <Input inputName={'BAD'} onInput={(e) => handleInput(e, setBad)}
             color={'#5cade0'} tabIndex={5} value={bad} />

      <Splitter />

      <div>
        <ResultText count={t('유효하지 않은 값이 있습니다.')}
                    isExists={!isNewVersionScore(Number(score), Number(cool), Number(great), Number(good)) &&
                      !isPreviousVersionScore(Number(score), Number(cool), Number(great), Number(good)) &&
                      score !== ''} />

        <ResultText text={t('스코어')}
                    count={caculatedScore}
                    isExists={score === ''} />
        <ResultText text={t('구버전 스코어')}
                    count={calculatedScorePreviousVersion}
                    isExists={score === ''} />

        <ResultText text={t('공BAD')} count={t('n개', {n: emptyBad})}
                    isExists={isNewVersionScore(Number(score), Number(cool), Number(great), Number(good))} />
        <ResultText text={t('구버전 공BAD')} count={t('n개', {n: emptyBadPreviousVersion})}
                    isExists={isPreviousVersionScore(Number(score), Number(cool), Number(great), Number(good))} />

      </div>
    </Container>
  );
}
