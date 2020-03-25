import React from 'react';
import styled from "styled-components";

const Container = styled.img`
    width: ${props => props.size};
    margin-left: 25%;
    max-width: 100%;
`;

const Logo = ({ size, ...rest }) =>{
    return <Container size={size} src={require('../../assets/Logo-512.png')} {...rest} />
};

export default Logo;
