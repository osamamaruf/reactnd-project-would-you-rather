import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component{
    render() {            
        console.log(this.props)
        return(
            <div>
                {this.props.question.id} 
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question : formatQuestion(question, users[question.author], authedUser)
    }
}


export default connect(mapStateToProps)(Question)