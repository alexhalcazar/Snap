import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import CardSearch from './pages/CardSearch';
import CardList from './pages/CardList';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cardsearch" element={<CardSearch />} />
                    <Route path="/cardlist" element={<CardList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
