import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Language } from '../../constants';

const Container = styled.footer`
    background-color: ${props => props.theme.color.borderDark};
    width: 100vw;
    height: 15vh;
    color: ${props => props.theme.color.primaryText};
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerContainer = styled.ul`
    list-style: none;
    max-width: 300px;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & li {
        display: inline;
        cursor: pointer;
    }
`;


const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <Container>
            <InnerContainer>
            {Object.keys(Language).map(key =>
            <li 
                key={key}
                role='button'
                onClick={() => changeLanguage(key)}
                >
                {Language[key]}
            </li>)}
            </InnerContainer>
        </Container>
    );
};

export default Footer;
