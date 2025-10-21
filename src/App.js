import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importer les pages
// import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login'; // Exemple de page de login
import Register from './components/pages/Register/Register';
import HomeClient from './components/pages/HomeClient/HomeClient';
import CreateDemande from './components/pages/Demandes/CreateDemande';
import Evenement from './components/pages/Evenement/Evenement';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définir les routes pour différentes pages */}
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client" element={<HomeClient />} />
            <Route path="/evenements" element={<Evenement />} />
          <Route path="/Creer-Demande" element={<CreateDemande />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
