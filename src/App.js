import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>

        <About />
        <Contact />
        <Work />
        
      </header>
    </div>
  );
}

export default App;
