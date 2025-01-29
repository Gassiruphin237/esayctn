import React, { useState } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './Demande.css';
import image from '../../../assets/upload.png';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PanToolIcon from '@mui/icons-material/PanTool';

function CreateDemande() {
    const cardsData = [
        { title: 'Mes demandes', link: '20', icon: <AutoAwesomeMosaicIcon />, colorClass: 'bg-primary' },
        { title: 'Demandes Réglés', link: '7', icon: <CheckCircleIcon />, colorClass: 'bg-success' },
        { title: 'Demandes Réjéttés', link: '5', icon: <CancelIcon />, colorClass: 'bg-danger' },
        { title: 'En attente', link: '5', icon: <PanToolIcon />, colorClass: 'bg-warning' }
    ];

    // État pour stocker les fichiers sélectionnés
    const [documents, setDocuments] = useState([]);

    // Fonction pour gérer la sélection de fichiers
    const handleFileChange = (event) => {
        const files = event.target.files;

        // Créer un tableau contenant les nouveaux fichiers valides
        const validFiles = Array.from(files).filter(file => file.type === 'application/pdf');

        // Si des fichiers valides sont trouvés, on les ajoute à la liste existante
        if (validFiles.length > 0) {
            setDocuments(prevDocs => [...prevDocs, ...validFiles]);
        } else {
            alert('Seuls les fichiers PDF sont autorisés');
        }
    };

    // Fonction pour ouvrir le dialogue de sélection de fichiers
    const handleButtonClick = () => {
        document.getElementById('file').click();
    };

    // Fonction pour supprimer un document de la liste
    const handleDelete = (index) => {
        setDocuments(prevDocs => prevDocs.filter((_, i) => i !== index));
    };

    return (
        <div className="home-client">
            <Sidebar />
            <main className="main-content" id='demande'>
                <div className='col-md-12'>
                    <div className='row' id='row-client'>
                        {cardsData.map((card, index) => (
                            <div className={`card ${card.colorClass}`} key={index} id='card'>
                                <div className="card-body">
                                    <h5 className="card-title text-white">{card.title}</h5>
                                    <div className="down">
                                        <a href="#" className="card-link text-white">{card.link}</a>
                                        <a href="#" className="card-link text-white" style={{ float: "right" }}>
                                            {card.icon}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <form action="">
                <div className='body'>
                    <div className="col-md-8">
                        <div className="row">
                            <div class="col-md-6 mb-2">
                                <label for="name" class="form-label">Nom de l'Entreprise</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="col-md-6 mb-2">
                                <label for="name2" class="form-label">Votre Nom</label>
                                <input type="text" class="form-control" id="name2" />
                            </div>
                            <div class="col-md-6 mb-2">
                                <label for="name3" class="form-label">Téléphone</label>
                                <input type="number" class="form-control" id="name3" />
                            </div>
                            <div class="col-md-6 mb-2">
                                <label for="name4" class="form-label">Adresse</label>
                                <input type="text" class="form-control" id="name4" />
                            </div>

                            <div class="col-md-12">
                                <textarea class="form-control" placeholder="Ecrivez un commentaire" style={{ height: "100px;" }}></textarea>
                            </div>
                        </div>
                        <div className="upload">
                            <div className="row">
                                <div className="col-md-6 upload-content">
                                    <input
                                        type="file"
                                        id="file"
                                        accept="application/pdf"
                                        hidden
                                        multiple
                                        onChange={handleFileChange}
                                    />
                                    <div className="img-area">
                                        <i className="bx bxs-cloud-upload icon"></i>
                                        <h3>Upload PDF Documents</h3>
                                        <p><img src={image} alt='test' width={80} /></p>
                                    </div>
                                    <button className="select-image" onClick={handleButtonClick}>Select Documents</button>
                                </div>

                                <div className="documents-list col-md-6">
                                    {/* Affiche la phrase si la liste de documents est vide */}
                                    {documents.length === 0 ? (
                                        <span>Ici s'afficheront vos documents sélectionnés</span>
                                    ) : (
                                        <ul>
                                            {documents.map((doc, index) => (
                                                <li key={index}>
                                                    <span>{doc.name}</span>
                                                    <DeleteIcon onClick={() => handleDelete(index)} className="delete-button" />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div class="col-md-12 mb-2">
                                <input type="submit" value="envoyer" class="mt-4 submit form-control" id="name" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </main>
        </div>
    );
}

export default CreateDemande;
