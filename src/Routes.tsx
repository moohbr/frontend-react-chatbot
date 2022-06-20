import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Chat from './pages/Chatbot/Chat';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Chat />} />
            </Routes>
        </Router>
    )
}