import React, { useState, useEffect, useLayoutEffect, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import memoizeOne from 'memoize-one';
import { fetchQuestions } from "../../actions/questions_actions";
import { updateAnswers, submitAnswers } from "../../actions/answer_action";
import { goToNextQuestion } from "../../actions/batch_action";
import { QuestionTree } from '../../utils/data-structures';
import { setGeoLocation } from '../../utils/helper';
import Loader from "../../components/Loader";
import Toastbar from '../../components/Toastbar'; 
import styled from "styled-components";
import Button from "../../components/Button";
import Radio from '../../components/Radio';
import { connect } from 'react-redux';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 85vh;
color: ${props => props.theme.color.borerDark};
align-items: center;
justify-content: center;
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
    font-weight: 500;
    font-size: 18px;
    max-width: 65ch;
    text-align: center;
    padding: 0 20px;
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

const getNativeQuestion = (question) => {
    const lng = localStorage.getItem('i18nextLng');
    switch(lng) {
        case 'hi': return question.hindi;
        case 'bn': return question.bengali;
        default: return question.english;
    }
};

let isFormSubmit = false;
//const m ='Pls go physician and take self-qurantine immediately! Covid Test is neccessary';

const Home = props => {
    const [ansSelected, setAnswerSelected] = useState(null);
    const [isShowFormSubmitErrorToast, setIsShowFormSubmitErrorToast] = useState(false);
    const { t } = useTranslation();
    const { isFetchingQuestions,
            answers,
            answeredAll,
            currentQuestionNode,
            fetchQuestions,
            goToNextQuestion,
            updateAnswers,
            submitAnswers,
            submitedAnswers
        } = props;

    useEffect(() => {
        fetchQuestions();
        setGeoLocation();
    },[]);

    useEffect(() => {
        if (submitedAnswers && isFormSubmit) {
            isFormSubmit = false;
            setIsShowFormSubmitErrorToast(true);
        }
    },[submitedAnswers])

    useLayoutEffect(() => {
        if (currentQuestionNode) {
            let { q_id } = currentQuestionNode;
            if (answers && answers.hasOwnProperty(q_id)) {
                setAnswerSelected(answers[q_id]);
            } else {
                setAnswerSelected(null);
            }
        }
    },[currentQuestionNode]);

    const handleAnswerSelected = e => {
        const answer = e.target.dataset["id"];
          if(!!answer) {
              setAnswerSelected(answer);
          }
    };

    const handleNext = () => {
        if (!!ansSelected) {
            let nextNode = currentQuestionNode[ansSelected];
            //console.log('d',currentQuestionNode);
            let weight = ansSelected === "yes"?currentQuestionNode["yes_weight"]: ansSelected === "no"? currentQuestionNode["no_weight"]:0;
            //console.log('ff', weight);
            if (nextNode) {
                goToNextQuestion({ 
                    qid: currentQuestionNode.q_id,
                    nextQid: currentQuestionNode[ansSelected].q_id,
                    answer: ansSelected,
                    weight
                });
            } else {
                updateAnswers(currentQuestionNode.q_id, ansSelected, true, weight);
            }
        }
    };

    const handlePrev = () => {
        let weight = ansSelected === "yes"?
            currentQuestionNode.yes_weight: ansSelected === "no"? currentQuestionNode.no_weight:0;
        goToNextQuestion({ 
            qid: currentQuestionNode.q_id,
            nextQid: currentQuestionNode.parent.q_id,
            answer: ansSelected,
            weight
        });
    };

    const handleSubmit = () => {
        isFormSubmit = true;
        submitAnswers();
    };

    

    return (
        <Container>
            {isFetchingQuestions ?
            <Loader/> : 
            <Fragment>
                <Question>
                    {currentQuestionNode && getNativeQuestion(currentQuestionNode.data.question_texts)}
                </Question>
                <Options onClick={handleAnswerSelected}>
                    <Radio
                        value="yes"
                        name="radio"
                        label={t('yes')}
                        isChecked={ansSelected === "yes"} />
                    <Radio
                        value="no"
                        name="radio"
                        label={t('no')}
                        isChecked={ansSelected === "no"} />
                </Options>
                <ButtonContainer>
                    {currentQuestionNode && !answeredAll
                    &&<Button onClick={handleNext} className='btn-next'>{t('next')}</Button>}
                    {currentQuestionNode && (!currentQuestionNode.yes && !currentQuestionNode.no) && answeredAll
                    && <Button className='btn-next' onClick={handleSubmit}>{t('submit')}</Button>}
                    {currentQuestionNode && currentQuestionNode.parent
                    && <Button onClick={handlePrev}>{t('prev')}</Button>}
                </ButtonContainer>
                {submitedAnswers && isShowFormSubmitErrorToast && <Toastbar
                message={submitedAnswers.suggestion}
                setIsToastOpen={setIsShowFormSubmitErrorToast} />}
            </Fragment>}
        </Container>
    );
};

const mapStateToProps = ({ questionsReducer, answersReducer }) => {
    const { isFetchingQuestions, questions, currentQuestionId } = questionsReducer;
    const { answers, answeredAll, submitedAnswers } = answersReducer;
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
        currentQuestionNode,
        answers,
        answeredAll,
        submitedAnswers
    };
};

export default connect(mapStateToProps, { fetchQuestions, updateAnswers, goToNextQuestion, submitAnswers })(Home);
