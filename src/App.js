import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
