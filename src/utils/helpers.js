export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}
 
export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
  
    return {
      name,
      id,
      timestamp,
      optionOneText: optionOne.text,
      optionTwoText: optionTwo.text,
      hasAnswered: optionOne.votes.concat(optionTwo.votes).includes(authedUser),
      totalVotesCount: optionOne.votes.concat(optionTwo.votes).length,
      optionOne,
      optionTwo,
      avatar: avatarURL      
    }
}