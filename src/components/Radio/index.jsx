import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0.5rem;
    color: ${props => props.theme.color.borderDark};
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        + .radio-label {
          &:before {
            content: '';
            background: $color1;
            border-radius: 100%;
            border: 1px solid ${props => props.theme.color.borderDark};
            display: inline-block;
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: -0.2em;
            margin-right: 1em; 
            vertical-align: top;
            cursor: pointer;
            text-align: center;
            transition: all 250ms ease;
          }
        }
        &:checked {
          + .radio-label {
            &:before {
              background-color: ${props => props.theme.color.primaryButton};
              box-shadow: inset 0 0 0 4px ${props => props.theme.color.borderDark};
            }
          }
        }
        &:focus {
          + .radio-label {
            &:before {
              outline: none;
              border-color: "red";
            }
          }
        }
        + .radio-label {
          &:empty {
            &:before {
              margin-right: 0;
            }
          }
        }
    }
}`;

const Radio = ({ name, label, value, isChecked }) => {
    return (
        <Container>
            <input tabIndex={0} name={name} type="radio" checked={isChecked}/>
            <label data-id={value} className='radio-label'>{label}</label>
        </Container>
    )
};

export default Radio;
