import React from 'react';
import styled from "styled-components";

const Title = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Title;

const Container = styled.div`
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
`
