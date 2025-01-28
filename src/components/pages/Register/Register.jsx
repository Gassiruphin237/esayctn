import React, { useEffect, useState } from 'react';
import './Register.css';
import axios from 'axios';
import logo from '../../../assets/logo.png';

// Importer ToastContainer et toast depuis react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    // États pour les champs du formulaire
    const [formData, setFormData] = useState({
        companyName: '',
        country: '',
        address: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        // Fonction pour récupérer les pays depuis l'API
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des pays:', error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        // Fonction pour filtrer les pays en fonction de la saisie
        const filterCountries = () => {
            if (!search) {
                setFilteredCountries(countries);
            } else {
                const filtered = countries.filter(country =>
                    country.name.common.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredCountries(filtered);
            }
        };

        filterCountries();
    }, [search, countries]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier si les mots de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas!");
            return;
        }

        try {
            // Créer l'objet de données pour l'API
            const params = new URLSearchParams({
                companyName: formData.companyName,
                country: formData.country,
                address: formData.address,
                phone: formData.phone,
                email: formData.email,
                username: formData.username,
                password: formData.password
            });

            // Effectuer la requête GET avec les paramètres dans l'URL
            const response = await axios.get('https://ton-api-url.com/register', {
                params: params
            });

            // Gérer la réponse
            console.log(response.data);

            // Afficher un message de succès
            toast.success('Inscription réussie!');
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            toast.error('Erreur lors de l\'inscription, veuillez réessayer.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row" id="row">
                    <div className="text-center">
                        <img src={logo} alt="logo" width={80} />
                        <div className="auth-footer">
                            <p><strong>Création du compte</strong></p>
                            <p>Vous avez déjà un compte ? <a href="/login">Connectez-vous</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Nom de l'entreprise"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <datalist id="countryDatalist">
                            {filteredCountries.map((country) => (
                                <option key={country.cca3} value={country.name.common}>
                                    {country.name.common}
                                </option>
                            ))}
                        </datalist>
                        <input
                            id="countrySearch"
                            className="form-control"
                            list="countryDatalist"
                            placeholder="Recherchez votre pays"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="country"
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Adresse/Ville"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="tel"
                            placeholder="Numéro téléphone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Adresse mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Nom d'utilisateur"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Mot de passe"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirmez mot de passe"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Je crée mon compte
                        </button>
                    </div>
                </div>
            </form>

            {/* Ajouter le ToastContainer ici pour afficher les notifications */}
            <ToastContainer />
        </div>
    );
}

export default Register;
