import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import CardDetail from "./components/CardDetail";
import Cards from "./components/Cards";
function App() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<Cards />} />
                <Route path="/cart/:id" element={<CardDetail />} />
            </Routes>
        </>
    );
}

export default App;
