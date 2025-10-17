import React from 'react';

function ChatListItem({ personaje }) {

return (
    <div className="chat-list-item">
    <div className="chat-info">
        <h3>{personaje.name}</h3>
        <p>{personaje.lastMessage}</p>
    </div>
    </div>
);
}
export default ChatListItem;