import React from 'react';
import styled from "styled-components";
import PangImage from '../assets/ggompang.jpeg'
import { useNavigate } from 'react-router-dom';
import Wrapper from "./common/Wrapper";
import Title from "./common/Title";
import LogoImage from "./common/LogoImage";

const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Contents>
                <Title>나에게 맞는 주인님은?</Title>
                <LogoImage src={PangImage} alt="시작 이미지" />
                <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!!</Desc>
                <Button className="mt-2" onClick={handleClickButton}>테스트 시작하기</Button>
            </Contents>
        </Wrapper>
    );
};

export default Home;

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
