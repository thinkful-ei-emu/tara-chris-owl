import React from 'react';
import Participant from './participant'

class ParticipantList extends React.Component {
//sort participant list based on inSession or not
//loop through partipants, calling Participant.render for each one
//renders all of those

render(){
  let inSessionArray;
  let outSessionArray;

  this.props.participants.forEach(participant => {
    if (participant.inSession) {
      inSessionArray.push(participant);
    }

    else {
      outSessionArray.push(participant);
    }
  });
  
  inSessionArray.forEach(participant => {
    participant.inSessionString="in-session";

  });

  outSessionArray.forEach(participant => {
    participant.inSessionString="left-session";
  })


  let participantsList;

  return (
    <div className="ParticipantList">
      {participantsList}
    </div>
  )
}
}

export default ParticipantList;