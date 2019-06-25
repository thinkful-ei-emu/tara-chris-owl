import React from 'react';
import ParticipantList from './participant-list.js';
import Stage from './stage';
import ChatLog from './chatlog';

import './App.css';

class App extends React.Component {
  render() {
    return(
      <main>
        <nav>
          <div class="eventButtons"><button class="chat">Chat</button><button class="participants">Participants</button><button class="settings">Settings</button><button class="link">Link</button><button class="help">Help</button></div>
          <div class="stageBar"><button>Hide Window</button><button>Stage</button></div>
        </nav>
          {<ParticipantList participants={this.props.store.participants} />}
          {<ChatLog chatEvents={this.props.store.chatEvents} participants={this.props.store.participants} />}
          {<Stage participants={this.props.store.participants} />}
        <footer>
          <div class="interactions"><button>Hide Window</button><button>Thumbs Up</button><button>Thumbs Down</button><button>Raise Hand</button><button>Clap</button></div>
          <div class="participants"></div>
          <div class=""><button>Rate Conversation</button><button>Toggle Camera</button><button>Toggle Mic</button><button>Share Screen</button><button>Leave Stage</button></div>
        </footer>
      </main>)

  }
}

export default App;
