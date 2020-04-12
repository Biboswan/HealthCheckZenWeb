import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
    color: ${props => props.theme.color.brand};
    font-weight: 800;

    :hover {
        color: #d61a1a;
    }
`;

const PageLink = ({ to, label, ...rest}) => {
    return (
        <Container to={to} {...rest}>
            {label}
        </Container>
    );
};

export default PageLink;
