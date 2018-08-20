import { getInitialData } from '../utils/api'
import {  _saveQuestion } from '../utils/_DATA'
import { receiveUsers, SaveUserQuestion } from '../actions/users'
import { receiveQuestions, saveQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_ID));
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
                dispatch(SaveUserQuestion({ user: authedUser, qid: question.id}))
            })            
          .then(() => dispatch(hideLoading()))            

    }    
}

