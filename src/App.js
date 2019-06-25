import React from 'react';
// import './App.css';
import ParticipantList from './participant-list.js';
import Stage from './stage';

class App extends React.Component {
  render() {
    return(
      <main>
          {<ParticipantList participants={this.props.store.participants} />}
          {<Stage participants={this.props.store.participants} />}
          {<ChatLog chatEvents={this.props.store.chatEvents} participants={this.props.store.participants} />}
      </main>)

  }
}

export default App;
