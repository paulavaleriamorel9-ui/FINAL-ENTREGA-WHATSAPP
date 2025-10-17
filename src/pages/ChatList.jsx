import React from 'react';
import { Link } from 'react-router-dom';
import { characters } from '../data';
import { useTheme } from '../ThemeContext';

import ChatListItem from '../components/ChatListItem';

function ChatList() {
    const { theme, toggleTheme } = useTheme();

    return (
    <div className={`chat-list-container ${theme}`}>
    
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'center' }}>
        {/* 🚨 Título modificado aquí */}
        <h1>WhatsApp</h1>
        
        <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
    </header>
    
    {characters.map((personaje) => (
        <Link 
        to={`/chat/${personaje.id}`} 
        key={personaje.id} 
        style={{ textDecoration: 'none', color: 'inherit' }}
        >
        <ChatListItem personaje={personaje} />
        </Link>
    ))}
    </div>
);
}

export default ChatList;