import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ContadorVisitas from "./components/ContadorVisitas";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      <NavBar onSelectPerson={handleSelectPerson} />
      <Banner person={selectedPerson} />
      {selectedPerson && <Skills person={selectedPerson} />}
      {selectedPerson && <Projects person={selectedPerson} />}
      <Contact />
      
      {/* Contador de visitas visible */}
      <div style={{ textAlign: "center", marginTop: "1rem", color: "#fff" }}>
        <ContadorVisitas />
      </div>

      <Footer />
    </div>
  );
}

export default App;
