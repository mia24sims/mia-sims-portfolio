import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       

        <Homepage />
        <About />
        <Contact />
        <Work />
      </header>
    </div>
  );
}

export default App;
