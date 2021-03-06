import { getInitialData } from '../utils/api'
import {  _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers, saveUserQuestion, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuestion,saveQuestionAnswer } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));                
                dispatch(hideLoading());
            })
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
        }).then((question) => {
                dispatch(saveQuestion(question))
                dispatch(saveUserQuestion({ user: authedUser, qid: question.id}))
            })            
          .then(() => dispatch(hideLoading()))            

    }    
}

export function handleSaveQuestionAnswer (info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(info))
        dispatch(saveUserAnswer(info))

        return _saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handleSaveQuestionAnser: ', e)
                dispatch(saveQuestionAnswer(info))
                dispatch(saveUserAnswer(info))
                alert('There was an error while saving the Answer. Try again.')
            })

    }    
}

