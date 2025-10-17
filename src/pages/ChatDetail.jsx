import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { characters } from '../data'; 

function ChatDetail() {
    const { id } = useParams();
    
    const currentCharacter = characters.find(char => char.id === id);
    

    const [messages, setMessages] = useState([
        { text: `¡Hola, soy ${currentCharacter?.name || 'Amigo'}!`, sender: 'other', time: '10:00 AM' },
        { text: 'Hey que onda?', sender: 'me', time: '10:05 AM' },
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault(); 
    
        if (inputMessage.trim() === '') return; 
    
        const newMessage = {
            text: inputMessage,
            sender: 'me', 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
    
        setMessages([...messages, newMessage]);
        setInputMessage('');
    };
    if (!currentCharacter) {
        return <h1>404 | Personaje no encontrado.</h1>;
    }

    return (
        <div className="chat-detail-container">
            <header>
                <h2>Chateando con {currentCharacter.name}</h2>
            </header>

            <main className="message-area">

                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <p>{msg.text}</p>
                        <span>{msg.time}</span>
                    </div>
                ))}
            </main>

            <footer>

                <form onSubmit={handleSendMessage} className="message-form">
                    <input
                        type="text"
                        placeholder={`Escribe tu mensaje a ${currentCharacter.name}...`}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)} 
                    />
                    <button type="submit">Enviar</button>
                </form>
            </footer>
        </div>
    );
}

export default ChatDetail;