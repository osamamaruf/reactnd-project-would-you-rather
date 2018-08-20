export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export function receiveUsers (users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}


export function saveUserQuestion ({user, qid}) {
    return {
        type : SAVE_USER_QUESTION,        
        user,
        qid        
    }    
}