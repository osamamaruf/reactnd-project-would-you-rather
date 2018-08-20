import { RECEIVE_USERS, SAVE_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users'

export default function users (state = {} , action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_QUESTION:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],                
                    questions: state[action.user].questions.concat([action.qid])
                }
            }
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],                
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state
    }
}