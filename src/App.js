import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importer les pages
// import Register from './components/pages/Register/Register';
import Login from './components/Login/Login'; // Exemple de page de login
import Register from './components/pages/Register/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définir les routes pour différentes pages */}
          <Route path="/" element={<Register />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
