import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import '../index.css'; 
import { HashRouter } from 'react-router-dom'; 
import { ThemeProvider } from './ThemeContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <HashRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </HashRouter>
    </React.StrictMode>,
);
