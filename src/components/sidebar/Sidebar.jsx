import { Link } from 'react-router-dom';
import './Sidebar.css'
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const links = [
    {
      name: "Tableau de bord",
      to: "/client",
      icon: "M480-120q-83 0-156-31.5T197-239q-54-54-85.5-127T80-522q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T803-763q54 54 85.5 127T920-480q0 83-31.5 156T803-197q-54 54-127 85.5T480-120Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"
    },
    {
      name: "Événements",
      to: "/evenements",
      icon: "M480-120q-83 0-156-31.5T197-239q-54-54-85.5-127T80-522q0-83 31.5-156T197-763q54-54 127-85.5T480-880v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm0-80v-80q-101 0-171-70t-70-170q0-101 70-171t171-70v-80q134 0 227 93t93 227q0 134-93 227t-227 93Z"
    },
    {
      name: "Invités",
      to: "/invites",
      icon: "M240-200h480v-60q0-67-48.5-115.5T560-424h-160q-67 0-115.5 48.5T240-260v60Zm240-340q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 420Zm0-420Z"
    },
    {
      name: "QR Codes",
      to: "/qrcodes",
      icon: "M160-520v-280h280v280H160Zm80-80h120v-120H240v120Zm320 80v-280h280v280H560Zm80-80h120v-120H640v120Zm-480 400v-280h280v280H160Zm80-80h120v-120H240v120Zm320 80v-280h280v280H560Zm80-80h120v-120H640v120Z"
    },
    {
      name: "Statistiques",
      to: "/statistiques",
      icon: "M120-160v-640h80v560h160v-400h80v400h160v-240h80v240h160v-480h80v560H120Z"
    },
    {
      name: "Paramètres",
      to: "/parametres",
      icon: "M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 200q-83 0-156-31.5T197-239q-54-54-85.5-127T80-522q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T803-763q54 54 85.5 127T920-480q0 83-31.5 156T803-197q-54 54-127 85.5T480-120Z"
    }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("sidebar-closed"); // utile pour adapter la taille des cards
  };

 return (
    <nav id="sidebar" className={isOpen ? "open" : "closed"}>
      <ul id="ul">
        <li className="sidebar-header">
          <span className="logo"> Wedding App</span>
          <button onClick={toggleSidebar} id="toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
              <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/>
            </svg>
          </button>
        </li>

        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed">
                <path d={link.icon}/>
              </svg>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;


// import './Sidebar.css';
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const links = [
//     { name: "Tableau de bord", to: "/client", icon: "M480-120q-83..." },
//     { name: "Événements", to: "/evenements", icon: "M480-120q-83..." },
//     { name: "Invités", to: "/invites", icon: "M240-200h480..." },
//     { name: "QR Codes", to: "/qrcodes", icon: "M160-520v-280..." },
//     { name: "Statistiques", to: "/statistiques", icon: "M120-160v..." },
//     { name: "Paramètres", to: "/parametres", icon: "M480-280q83..." }
//   ];

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     document.body.classList.toggle("sidebar-closed");
//   };

//   return (
//     <nav id="sidebar" className={isOpen ? "open" : "closed"}>
//       <ul id="ul">
//         <li className="sidebar-header">
//           <span className="logo"> Wedding App</span>
//           <button onClick={toggleSidebar} id="toggle-btn">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
//               <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/>
//             </svg>
//           </button>
//         </li>

//         {links.map((link, index) => (
//           <li key={index}>
//             <Link to={link.to}>
//               <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed">
//                 <path d={link.icon}/>
//               </svg>
//               <span>{link.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;

