import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PangImage from '../assets/ggompang.jpeg'
import {Button} from "reactstrap";
import {useNavigate, useSearchParams} from 'react-router-dom';
import Wrapper from "./common/Wrapper";
import Title from "./common/Title";
import { ResultData } from "../assets/data/resultdata";

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
                <LogoImage>
                    <img src={result.image} className="rounded-circle" width={350} height={350} />
                </LogoImage>
                <Desc>
                    예비 집사님과 찰떡궁합인 고양이는 <strong style={{ color: '#322923', fontSize: '22px' }}>{result.name}</strong> 입니다.
                    <br />
                    {result.desc}
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

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 26px;
  text-align: center;
  width: 90%;
`
