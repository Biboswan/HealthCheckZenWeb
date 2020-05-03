import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/account_action';
import Logo from "../Logo";
import Button from '../Button';

const Container = styled.header`
    background-color: ${props => props.theme.color.brand};
    color: ${props => props.theme.color.bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    top: 0;

    .logo {
        margin-left:0;
    }
`;

const LogoutButton = styled(Button)`
    background-color: ${props => props.theme.color.borderDark};
    color: ${props => props.theme.color.bg};
`;

const Header = props => {
    const { t } = useTranslation();
    const { loginDetails, logoutUser } = props;

    return (
        <Container>
            <Logo size='80px' className='logo' />
            <h1>{t('appName')}</h1>
            {loginDetails && loginDetails.success && <LogoutButton onClick={logoutUser}>{t('logout')}</LogoutButton>}
        </Container>
    );
};

const mapStateToProps = state => {
    return {
      loginDetails: state.accountReducer.loginDetails
    };
};

export default connect(mapStateToProps, { logoutUser })(Header);
