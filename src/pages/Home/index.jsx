import React, { useState } from 'react';
import styled from "styled-components";
import Button from "../../components/Button";
import Radio from '../../components/Radio';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
color: ${props => props.theme.color.primaryText};
align-items: center;
justify-content: center;
background-color: ${props => props.theme.color.brand};
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    .btn-next {
        margin-bottom: 20px;
    }
`;

const Question = styled.div`
    font-weight: 700;
    font-size: 22px;
`;

const Options = styled.form`
    color: ${props => props.theme.color.primaryText};
    margin-top: 20px;
`;

const q = 'Do you have fever ?';
const options = [{ id:1, val:'Yes' }, { id: 2, val: 'No'}];

const Home = props => {
    const [ansSelected, setAnswerSelected] = useState(null);

    const handleAnswerSelected = e => {
      const id = e.target.dataset["id"];
        if(!!id) {
            setAnswerSelected(id);
        }
    };

    return (
        <Container>
            <Question>
                {q}
            </Question>
            <Options onClick={handleAnswerSelected}>
                {options.map(({ id, val}) =>
                <Radio
                    key={id}
                    value={id}
                    name="radio"
                    label={val}
                    isChecked={ansSelected==id} />)}
            </Options>
            <ButtonContainer>
                <Button className='btn-next'>Next</Button>
                <Button>Prev</Button>
            </ButtonContainer>
        </Container>
    );
};

export default Home;
