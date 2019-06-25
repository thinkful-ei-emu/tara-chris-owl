import React from 'react';

class ChatBox extends React.Component {
    render() {
        const { name, avatar, type, time, message } = this.props;
        let chat;
        if(type === 'message'){
            chat = (
                <div class="chatBox">
                    <img src={avatar} alt="avatar" />
                    <p><h5>{name}</h5> {new Date(time)}</p>
                    <p>{message}</p>
                </div>
            );
        }
        else{
            if(type === 'thumbs-up'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> gave a thumbs up</p>
                </div>
                );
            }
            else if(type === 'thumbs-down'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> gave a thumbs down</p>
                </div>
                );
            }
            else if(type === 'raise-hand'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> raised their hand</p>
                </div>
                );
            }
            else if(type === 'clap'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> clapped</p>
                </div>
                );
            }
            else if(type === 'join'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> joined</p>
                </div>
                );
            }
            else if(type === 'leave'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> left the session</p>
                </div>
                );
            }
            else if(type === 'join-stage'){
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> joined the stage</p>
                </div>
                );
            }
            else {
                chat = (
                <div class="chatBox">
                    <p><h5>{name}</h5> left the stage</p>
                </div>
                );
            }            
        }

        return (
            {chat}
        )
    }
}

export default ChatBox;

