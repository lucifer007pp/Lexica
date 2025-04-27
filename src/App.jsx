import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CodeEditorPage from './components/CodeEditor.jsx';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/codeeditor" element={<CodeEditorPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
}

export default App;