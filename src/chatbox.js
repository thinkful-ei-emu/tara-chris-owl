import React from 'react';

class ChatBox extends React.Component {
    render() {
        const { type, time, message, id } = this.props;

        console.log(this.props.participants);
        let name;
        let avatar;
        this.props.participants.forEach(participant => {
            if (id === participant.id) {
                name = participant.name;
                avatar = participant.avatar;
            }
        });
        

        let chat;
        if(type === 'message'){
            chat = (
                <div className="chatBox">
                    <img src={avatar} alt="avatar" />
                    <p><em>{name}</em> {new Date(time).toTimeString()}</p>
                    <p>{message}</p>
                </div>
            );
        }
        else{
            if(type === 'thumbs-up'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> gave a thumbs up</p>
                </div>
                );
            }
            else if(type === 'thumbs-down'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> gave a thumbs down</p>
                </div>
                );
            }
            else if(type === 'raise-hand'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> raised their hand</p>
                </div>
                );
            }
            else if(type === 'clap'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> clapped</p>
                </div>
                );
            }
            else if(type === 'join'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> joined</p>
                </div>
                );
            }
            else if(type === 'leave'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> left the session</p>
                </div>
                );
            }
            else if(type === 'join-stage'){
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> joined the stage</p>
                </div>
                );
            }
            else {
                chat = (
                <div className="chatBox">
                    <p><em>{name}</em> left the stage</p>
                </div>
                );
            }            
        }

        return chat;
    }
}

export default ChatBox;

