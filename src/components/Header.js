import React from 'react';

const Header = () => {
    return (
      <div className="Header">
        <div className="container">
          <a href="#" className="accueil"> <span> <i className="fas fa-home"></i> Accueil </span> </a>
          <ul>
            <li><a href="#"> Résultats </a></li>
            <li><a href="#"> Boutique </a></li>
            <li><a href="#"> Insolites </a></li>
            <li><a href="#"> Vidéos </a></li>
          </ul>
        </div>
        {/* <ul>
          <li><Link to="/"> Résultats </Link></li>
          <li><Link to="/"> Boutique </Link></li>
          <li><Link to="/"> Insolites </Link></li>
          <li><Link to="/"> Vidéos </Link></li>
        </ul> */}
      </div>
    );
}

export default Header;
