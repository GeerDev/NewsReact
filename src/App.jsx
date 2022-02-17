import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<ListNews />} />   
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
