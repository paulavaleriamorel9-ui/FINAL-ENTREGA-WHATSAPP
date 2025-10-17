import { Routes, Route } from 'react-router-dom';
import ChatList from './pages/ChatList.jsx';
import ChatDetail from './pages/ChatDetail.jsx';
import '../app.css'; // Corregida para subir un nivel (a la raíz)

function App() {
return (
    <div className="App">
    <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatDetail />} />
        <Route path="*" element={<h1>404: ¡Estás en otro universo!</h1>} />
    </Routes>
    </div>
);
}

export default App;