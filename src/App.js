import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import Login from "./components/Login";

import { login as loginAuth } from './utils/auth';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleLogin = (username, password) => {
    const result = loginAuth(username, password);
    if (result.success) {
      setIsLoggedIn(true);
      setNombreUsuario(result.user);
    } else {
      alert(result.message);
    }
  };

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <NavBar onSelectPerson={handleSelectPerson} />
          <Banner person={selectedPerson} />
          {selectedPerson && <Skills person={selectedPerson} />}
          {selectedPerson && <Projects person={selectedPerson} />}
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
