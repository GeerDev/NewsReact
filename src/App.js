import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header />

    <Routes>
        <Route path="/home" element={<Reserve />} />
        <Route path="/form" element={<Reserve />} />
        <Route path="/list" element={<Reserve />} />   
    </Routes>
    </Router>
    </>
  );
}

export default App;
