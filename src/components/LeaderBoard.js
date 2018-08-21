import React from 'react';
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'

function LeaderBoard (props) {
  const { users, userIds } = props
  return (
    <div>
      {
          userIds.map((userId) => (                            
            <ScoreCard key={userId} user={users[userId]} />                            
          ))        

      }          
    </div>
  );
}


function mapStateToProps({ users }) {  

  return {
      users,      
      userIds : Object.keys(users).sort((a,b) => 
        (users[b].questions.length + Object.keys(users[b].answers).length ) - 
        (users[a].questions.length + Object.keys(users[a].answers).length))
  }
}

export default connect(mapStateToProps)(LeaderBoard);
