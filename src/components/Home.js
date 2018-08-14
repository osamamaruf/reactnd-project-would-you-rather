import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component{
    render() {
        const { questionIds } = this.props;
        return(
            <div>
                <ul>
                    {
                        questionIds.map((questionId) => (
                            <li key={questionId}>
                                <Question id={questionId} />
                            </li>
                        ))

                    }
                </ul>
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