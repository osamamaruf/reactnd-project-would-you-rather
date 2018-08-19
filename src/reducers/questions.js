import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {} , action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],                
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: action.answer === 'optionOne'
                        ? state[action.qid].optionOne.votes.concat([action.authedUser])
                        : state[action.qid].optionTwo.votes.concat([action.authedUser])
                    }

                }
            }
        case ADD_QUESTION:                        
            return {
                ...state,
                [action.question.id]: action.question                
            }            
        default :
            return state
    }
}