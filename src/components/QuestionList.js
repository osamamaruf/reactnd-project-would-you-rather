import React, { Component } from 'react'
import Question from './Question'

class QuestionList extends Component{
    render() {
        const { questionIds } = this.props;
        return(
            <div>                
                {
                    questionIds.map((questionId) => (                            
                        <Question key={questionId} id={questionId} />                            
                    ))

                }                                         
            </div>
        )
    }
}

export default QuestionList