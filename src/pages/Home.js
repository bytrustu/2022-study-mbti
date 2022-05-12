import React from 'react';
import styled from "styled-components";
import PangImage from '../assets/ggompang.jpeg'
import {Button} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import Wrapper from "./common/Wrapper";
import Title from "./common/Title";

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
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width={350} height={350} />
                </LogoImage>
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

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 26px;
`
