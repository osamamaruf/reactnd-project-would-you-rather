import React from 'react';
import { Card, Media } from 'reactstrap'

function ScoreCard (props) {
    const { user } = props
    const { name, avatarURL, questions, answers } = user
    
    return (
        <Card body className="mt-4">                        
                <Media>
                    <Media left top>
                        <Media object src={avatarURL} height={64} width={64} alt="avatar" className="rounded-circle"/>
                    </Media>
                    <Media body>
                    <Media heading>
                        {name}
                    </Media>                        
                        <div> Answered questions:  { Object.keys(answers).length } </div>
                        <div> Created questions:  { questions.length } </div>
                        <div> Score:  { Object.keys(answers).length + questions.length } </div>
                    </Media>
                </Media>                                                                                                        
        </Card>                        
    )
}

export default ScoreCard;
