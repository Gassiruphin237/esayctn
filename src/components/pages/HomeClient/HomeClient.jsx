import React from 'react';
import './Home-client.css';
import Sidebar from '../../sidebar/Sidebar';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PanToolIcon from '@mui/icons-material/PanTool';
import {PieChart } from '@mui/x-charts';
import image from '../../../assets/4913290.png'
function HomeClient() {
  const cardsData = [
    { title: 'Mes demandes', link: '20', icon: <AutoAwesomeMosaicIcon />, colorClass: 'bg-primary' },
    { title: 'Demandes Réglés', link: '7', icon: <CheckCircleIcon />, colorClass: 'bg-success' },
    { title: 'Demandes Réjéttés', link: '5', icon: <CancelIcon />, colorClass: 'bg-danger' },
    { title: 'En attente', link: '5', icon: <PanToolIcon />, colorClass: 'bg-warning' }
  ];

  return (
    <div className="home-client">
      <Sidebar />
      <main className="main-content">
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
        <div className="chart">
          <div className="row">
            <div className='col-md-4'>
              <img src={image} alt="img" className='img' />
            </div>
            <div className='col-md-4'>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Réglées' },
                      { id: 1, value: 15, label: 'Rejetées' },
                      { id: 2, value: 20, label: 'En attente' },
                    ],
                  },
                ]}
                width={400}
                height={250}
                colors={['#198754', '#DC3545', '#FFC107']}  // Remplace ces valeurs par les couleurs que tu souhaites
              />

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeClient;
