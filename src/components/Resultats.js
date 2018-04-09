import React from 'react';
import { resultats } from './data/resultats';

const rslts = resultats.map((item, i) => {
  return (
    <li className="list-group-item"> 
      <span className="equip win"> { item.home_team } </span> 
      <span className="score-wrapper">
        <span className="score"> { item.home_score } </span> -
        <span className="score"> { item.ext_score } </span> 
      </span> 
      <span className="equip lose"> { item.ext_team } </span> 
    </li>
  )
})

const Resultats = () => {
    return (
      <div className="Resultats">
        <div className="title--h5">Résultats</div>
        <ul className="list-group">
         { rslts }
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

export default Resultats;
