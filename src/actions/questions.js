import { _saveQuestionAnswer } from '../utils/_DATA'

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


export function saveQuestion (question) {
    return {
        type : ADD_QUESTION,        
        question        
    }    
}

