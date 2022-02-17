import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import List from './components/List/List'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />   
    </Routes>
    </Router>
    </>
  );
}

export default App;
