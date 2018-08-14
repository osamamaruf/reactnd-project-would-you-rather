import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component{
    render() {
        const { questionIds } = this.props;
        return(
            <div className="container">                
                {
                    questionIds.map((questionId) => (                            
                        <Question key={questionId} id={questionId} />                            
                    ))

                }                                         
            </div>
        )
    }
}

function mapStateToProps({ questions }){
    return {
      questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)