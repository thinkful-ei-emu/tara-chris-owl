import React from 'react';
import ChatBox from './chatbox'

class ChatLog extends React.Component {
    render() {
        let newArray = [];

        this.props.chatEvents.forEach((event, eventId) => {
            newArray.push(event);
            this.props.participants.forEach((participant) => {
                if(event.participantId === participant.id) {
                    newArray[eventId].name = participant.name;
                    newArray[eventId].avatar = participant.avatar;
                };
            })
        });
        
        
        let chatWindow = newArray.map((item) =>
        <ChatBox key={item.participantId} name={item.name} avatar={item.avatar} type={item.type} message={item.message} time={item.time} />);
        
        return (
            <div class="chatLog">
                {chatWindow}
            </div>
        )
    }
}

export default ChatLog;