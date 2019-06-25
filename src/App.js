import React from 'react';
// import './App.css';
import ParticipantList from './participant-list.js'

class App extends React.Component {
  render() {
    return(
      <main>
        <section className="parList">
          {<ParticipantList participants={this.props.store.participants} />}
        </section>
      </main>)

  }
}

export default App;
