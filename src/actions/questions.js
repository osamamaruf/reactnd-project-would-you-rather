import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions
    }
}


function saveQuestionAnswer ({ authedUser, qid, answer }) {
    return {
        type : SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer (info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(info))

        return _saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handleSaveQuestionAnser: ', e)
                dispatch(saveQuestionAnswer(info))
                alert('There was an error while saving the Answer. Try again.')
            })

    }    
}


function saveQuestion (question) {
    return {
        type : ADD_QUESTION,        
        question        
    }    
}

export function handleSaveQuestion (options) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const { optionOneText, optionTwoText } = options
        
        dispatch(showLoading())

        return _saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        }).then((question) => dispatch(saveQuestion(question)))            
          .then(() => dispatch(hideLoading()))            

    }    
}