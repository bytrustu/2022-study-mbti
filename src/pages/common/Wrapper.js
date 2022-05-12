import React, {memo} from 'react';
import styled from "styled-components";

const Wrapper = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default memo(Wrapper);

const Container = styled.main`
  height: 100vh;
  width: 100%;
`
