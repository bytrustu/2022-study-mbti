import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useNavigate, useSearchParams} from 'react-router-dom';
import Wrapper from "./common/Wrapper";
import Title from "./common/Title";
import { ResultData } from "../assets/data/resultdata";
import LogoImage from "./common/LogoImage";

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [result, setResult] = useState({});

    const handleClickButton = () => {
        navigate('/');
    }

    useEffect(() => {
        const findMBTI = ResultData.find((el) => el.best === mbti.toUpperCase());
        setResult(findMBTI);
    }, [mbti]);

    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage src={result.image} alt="결과 이미지" />
                <Desc>
                    <p>예비 집사님과 찰떡궁합인 고양이는 <strong style={{ color: '#322923', fontSize: '22px' }}>{result.name}</strong> 입니다.</p>
                    <p>{result.desc}</p>
                </Desc>
                <Button className="mt-2" onClick={handleClickButton}>테스트 다시하기</Button>
            </Contents>
        </Wrapper>
    );
};

export default Result;

const Header = styled.header`
  font-size: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 26px;
  text-align: center;
  width: 90%;
  & p {
    line-height: 24px;
  }
`

const Button = styled.button`
  margin-top: 10px;
  color: #fff;
  background-color: #6c757d;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  height: 40px;
`

