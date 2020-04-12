import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import PageLink from "../../components/PageLink";

const AlternateSection = styled.section`
  margin-top: 40px;
  padding: 0 20px 20px;
  text-align: center;

  & hr {
    border: 1px dotted ${props => props.theme.color.borderLight};
  }

  .orText {
    margin: 20px auto;
  }
`;

const FormAlternateSectionLink = ({ link, linkLabel, className }) => {
    const { t } = useTranslation();

    return (
        <AlternateSection className={className}>
            <hr />
            <div className="orText">{t('or')}</div>
            <PageLink className="link" to={link} label={linkLabel} />
        </AlternateSection>
    );
};

export default FormAlternateSectionLink;
