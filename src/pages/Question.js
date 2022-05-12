import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import Wrapper from "./common/Wrapper";
import Title from "./common/Title";
import {QuestionData} from '../assets/data/questiondata'
import {createSearchParams, useNavigate} from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [totalScore, setTotalScore] = useState([
        {id: 'EI', score: 0},
        {id: 'SN', score: 0},
        {id: 'TF', score: 0},
        {id: 'JP', score: 0},
    ]);

    const { id, title, type, answera, answerb } = QuestionData[page];
    const onClickAnswer = useCallback((type, score) => {
        const newTotalScore = totalScore.map(el => {
            if (el.id === type) {
                return {
                    ...el,
                    score: el.score + score,
                }
            }
            return el;
        });
        setTotalScore(newTotalScore);

        if (page === QuestionData.length - 1) {
            const mbti = newTotalScore.reduce((acc, curr) => {
                if (curr.score >= 2) {
                    return acc + curr.id.substring(0, 1)
                }
                return acc + curr.id.substring(1, 2)
            }, "");

            navigate({
                pathname: '/result',
                search: `?${createSearchParams({
                    mbti,
                })}`,
            });
            return;
        }

        setPage((prev) => prev + 1);
    }, [totalScore, page, navigate]);

    useEffect(() => {
        console.log(totalScore);
    }, [totalScore]);

    return (
        <Wrapper>
            <progress max="100" value={(page / QuestionData.length) * 100} style={{marginTop: '20px', width: '100%'}} />
            <Title>{id}번.<br />{title}</Title>
            <ButtonGroup>
                <StyledButton onClick={() => { onClickAnswer(type, 1); }}>{answera}</StyledButton>
                <StyledButton onClick={() => { onClickAnswer(type, 0); }}>{answerb}</StyledButton>
            </ButtonGroup>
        </Wrapper>
    );
};

export default Question;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const StyledButton = styled.button`
  width: 40%;
  min-height: 200px;
  font-size: 24px;
  color: #fff;
  background-color: #198754;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;

  & + & {
    margin-left: 16px;
  }
`
