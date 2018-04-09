import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
      <div className="SideMenu">
        <div className=""></div>
        <div className="title--h5 text-center"> <i className="fas fa-map-signs" /> Catégories </div>
        <ul>
          <li><Link to="/categorie"><span className="sidemenutext"> Football </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/categorie"><span className="sidemenutext"> Basketball </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/categorie"><span className="sidemenutext"> Lutte </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/categorie"><span className="sidemenutext"> Volley </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/categorie"><span className="sidemenutext"> Arts Matiaux </span><i className="fas fa-angle-right" /> </Link></li>
          <li><Link to="/categorie"><span className="sidemenutext"> Autres </span><i className="fas fa-angle-right" /> </Link></li>
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

export default SideMenu;
