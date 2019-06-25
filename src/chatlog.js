import React from 'react';
import ChatBox from './chatbox'

class ChatLog extends React.Component {
    render() {
        let chatWindow = this.props.chatEvents.map((item) => 
        
        <ChatBox key={item.participantId} type={item.type} message={item.message} time={item.time} id={item.participantId} participants={this.props.participants}/>);
        
        return (
            <section className="chatLog hidden app-level">
                {chatWindow}
            </section>
        )
    }
}

export default ChatLog;