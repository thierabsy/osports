import React from 'react';
import { Link } from 'react-router-dom';

const CategorieSideMenu = () => {
    return (
      <div className="SideMenu">
        <div className=""></div>
        <div className="title--h5 text-center"> <i className="fas fa-futbol" /> Football </div>
        <ul>
          <li><Link to="/football/senegal"><span className="sidemenutext"> Sénégal </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/france"><span className="sidemenutext"> France </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/espagne"><span className="sidemenutext"> Espagne </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/angleterre"><span className="sidemenutext"> Angleterre </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/italie"><span className="sidemenutext"> Italie</span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/allemagne"><span className="sidemenutext"> Allemagne</span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/football/autres"><span className="sidemenutext"> Autres </span><i className="fas fa-angle-right" /> </Link></li>
        </ul>
        {/* <ul>
          <li><Link to="/"> Résultats </Link></li>
          <li><Link to="/"> Boutique </Link></li>
          <li><Link to="/"> Insolites </Link></li>
          <li><Link to="/"> Vidéos </Link></li>
        </ul> */}
      </div>
    );
}

export default CategorieSideMenu;
