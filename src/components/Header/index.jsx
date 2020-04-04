import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Logo from "../Logo";
import Button from '../Button';

const Container = styled.header`
    background-color: ${props => props.theme.color.primaryText};
    color: ${props => props.theme.color.borderDark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    top: 0;

    h1 { 
        padding: 0;
        margin: 0;
    }

    .logo {
        margin-left:0;
    }
`;

const LogoutButton = styled(Button)`
    background-color: ${props => props.theme.color.borderDark};
    color: ${props => props.theme.color.primaryText};
`;

const Header = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Logo size='80px' className='logo' />
            <h1>{t('appName')}</h1>
            <LogoutButton>{t('logout')}</LogoutButton>
        </Container>
    );
};

export default Header;
