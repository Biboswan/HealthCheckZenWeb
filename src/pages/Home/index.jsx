import React, { useState, useEffect, useCallback, Fragment } from 'react';
import memoizeOne from 'memoize-one';
import { fetchQuestions, setCurrentQuestionId } from "../../actions/questions_actions";
import { updateAnswers, submitAnswers } from "../../actions/answer_action";
import { QuestionTree } from '../../utils/data-structures';
import Loader from "../../components/Loader";
import styled from "styled-components";
import Button from "../../components/Button";
import Radio from '../../components/Radio';
import { connect } from 'react-redux';

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

const buildTree = memoizeOne(preorderArr => {
    const Tree = new QuestionTree();
    Tree.constructTree(preorderArr);
    return Tree;
});


const Home = props => {
    const [ansSelected, setAnswerSelected] = useState(null);
    const { isFetchingQuestions,
            fetchQuestions,
            updateAnswers,
            currentQuestionNode,
            setCurrentQuestionId
        } = props;

    useEffect(() => {
        fetchQuestions();
    },[]);

    useEffect(() => {
        
    },[]);

    const handleAnswerSelected = e => {
        const answer = e.target.dataset["id"];
          if(!!answer) {
              setAnswerSelected(answer);
          }
    };

    const handleNext = useCallback(() => {
        if (!!ansSelected) {
            let nextNode = currentQuestionNode[ansSelected];
            if (nextNode) {
                setCurrentQuestionId(currentQuestionNode[ansSelected].q_id);
                updateAnswers(currentQuestionNode.q_id, ansSelected);
            } else {
                // submitAnswers
            }
        }
    },[ansSelected]);

    const handlePrev = useCallback(() => {
        setCurrentQuestionId(currentQuestionNode.parent.q_id);
    },[]);

    return (
        <Container>
            {isFetchingQuestions ?
            <Loader/> : 
            <Fragment>
                <Question>
                    {currentQuestionNode && currentQuestionNode.data.question_texts.english}
                </Question>
                <Options onClick={handleAnswerSelected}>
                    <Radio
                        value="yes"
                        name="radio"
                        label="Yes"
                        isChecked={ansSelected === "yes"} />
                    <Radio
                        value="no"
                        name="radio"
                        label="No"
                        isChecked={ansSelected === "no"} />
                </Options>
                <ButtonContainer>
                    <Button onClick={handleNext} className='btn-next'>Next</Button>
                    {currentQuestionNode && currentQuestionNode.parent
                    && <Button onClick={handlePrev}>Prev</Button>}
                </ButtonContainer>
            </Fragment>}
        </Container>
    );
};

const mapStateToProps = ({ questionsReducer }) => {
    const { isFetchingQuestions, questions, currentQuestionId } = questionsReducer;
    let currentQuestionNode = null;
    if (questions) {
        const Tree = buildTree(questions);
    
        if(!currentQuestionId) {
            currentQuestionNode = Tree.root;
        } else {
            currentQuestionNode = Tree.findNode(Tree.root, currentQuestionId);
        }
    }

    return {
        isFetchingQuestions,
        currentQuestionNode
    };
};

export default connect(mapStateToProps, { fetchQuestions, setCurrentQuestionId, updateAnswers, submitAnswers })(Home);
