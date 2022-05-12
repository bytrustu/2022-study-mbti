import React from 'react';
import styled from "styled-components";

const LogoImage = ({ src, alt, style }) => {
    return (
        <Image src={src} alt={alt} style={style} />
    );
};

export default LogoImage;

const Image = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin-top: 10px;
`
