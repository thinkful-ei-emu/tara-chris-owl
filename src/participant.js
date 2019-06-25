import React from 'react';

class Participant extends React.Component {

  //accepts following props: id, name, avatar, inSessionString="in-session", onStage
  render(props) {

    let sessionStatus = '';

    if (this.props.onStage) {
      sessionStatus = "on stage";
    }

    else if (this.props.inString==="in-session") {
      sessionStatus = "in session";
    }

    else {
      sessionStatus = "left session";
    }

    return (
    <div className="participant">
      <img src={this.props.avatar} alt={`${this.props.name}'s avatar`}></img>
      <h3 className="participantName">{this.props.name}</h3>
      <p className={this.props.inSessionString}>{sessionStatus}</p>
    </div>
    );
  }
}

export default Participant;
/* <div>
  <img src="avatar.com" alt="person avatar"></img>
  <h3>Name</h3>
  <p class="">Status</p>
  <button>Boot</button>
</div> */