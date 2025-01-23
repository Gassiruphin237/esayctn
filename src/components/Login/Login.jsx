import React, { useState } from 'react';
import './Login.css'; // Assure-toi d'importer le fichier CSS
import logo from '../../assets/logo.png';
import axios from 'axios';  // Assure-toi d'installer axios avec `npm install axios`
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérification si les champs sont remplis
    if (!email || !password) {
      toast.error('Veuillez remplir tous les champs !');
      return;
    }

    try {
      // Requête à l'API pour l'authentification de l'utilisateur
      const response = await axios.post('https://ton-api-url.com/login', {
        email,
        password
      });

      // Vérification de la réponse de l'API
      if (response.data.success) {
        toast.success('Connexion réussie !');
        // Gérer la redirection ou les actions après la connexion
        // Par exemple : rediriger vers le tableau de bord ou la page d'accueil
      } else {
        toast.error('Email ou mot de passe incorrect !');
      }
    } catch (error) {
      // Gérer les erreurs de requête API
      console.error('Erreur lors de la connexion:', error);
      toast.error('Une erreur est survenue lors de la connexion. Essayez à nouveau.');
    }
  };

  return (
    <div className="container auth-container">
      <div className="auth-box">
        <div className="text-center">
          <img src={logo} alt="logo" width={80} />
          <div className="auth-footer">
            <p><strong>Se Connecter</strong></p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Je me connecte</button>
          </div>

          <div className="auth-footer">
            <a href="#">Mot de passe oublié ?</a>
            <p>Vous n'avez pas de compte ? <a href="Register">Inscrivez-vous</a></p>
          </div>
        </form>
      </div>

      {/* ToastContainer pour afficher les notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
