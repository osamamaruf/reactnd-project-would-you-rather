import React from 'react'
import Question from './Question'

function QuestionList (props) {
    const { questionIds } = props;
    return(
        <div>                
            {
                questionIds.map((questionId) => (                            
                    <Question key={questionId} id={questionId} />                            
                ))

            }                                         
        </div>
    );        
}

export default QuestionList