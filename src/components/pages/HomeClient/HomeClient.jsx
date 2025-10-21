import React from 'react';
import './Home-client.css';
import Sidebar from '../../sidebar/Sidebar';
import GroupIcon from '@mui/icons-material/Group';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import { PieChart } from '@mui/x-charts';
// import image from '../../../assets/4913290.png';

function HomeClient() {
  const cardsData = [
    { title: 'Total Invités', value: '120', icon: <GroupIcon />, colorClass: 'bg-primary' },
    { title: 'Invitations envoyées', value: '95', icon: <SendIcon />, colorClass: 'bg-success' },
    { title: 'Présences confirmées', value: '70', icon: <CheckCircleIcon />, colorClass: 'bg-warning' },
    { title: 'Refus / Absents', value: '25', icon: <HighlightOffIcon />, colorClass: 'bg-danger' }
  ];

  return (
    <div className="home-client">
      <Sidebar />
      <main className="main-content">
        <div className='col-md-12'>
          <h2>Tableau de bord - Mariage</h2>
          <div className='row' id='row-client'>
            {cardsData.map((card, index) => (
              <div className={`card ${card.colorClass}`} key={index} id='card'>
                <div className="card-body">
                  <h5 className="card-title text-white">{card.title}</h5>
                  <div className="down">
                    <span className="card-link text-white">{card.value}</span>
                    <span className="card-link text-white" style={{ float: "right" }}>
                      {card.icon}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Graphique */}
        <div className="chart">
          {/* <div className="row">
            <div className='col-md-4'>
              <img src={image} alt="img" className='img' />
            </div>
            <div className='col-md-4'>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 70, label: 'Confirmés' },
                      { id: 1, value: 25, label: 'Refusés' },
                      { id: 2, value: 25, label: 'En attente' },
                    ],
                  },
                ]}
                width={400}
                height={250}
                colors={['#198754', '#DC3545', '#FFC107']}
              />
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default HomeClient;
