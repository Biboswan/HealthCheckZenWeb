import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Logo from "../Logo";
import Button from '../Button';

const Container = styled.header`
    background-color: ${props => props.theme.color.brand};
    color: ${props => props.theme.color.primaryText};
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

const Header = props => {
    const { t } = useTranslation();
    const { loginDetails } = props;

    return (
        <Container>
            <Logo size='80px' className='logo' />
            <h1>{t('appName')}</h1>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
      loginDetails: state.accountReducer.loginDetails
    };
};

export default connect(mapStateToProps, null)(Header);
