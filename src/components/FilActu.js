import React from 'react';
import { homecontent } from './data/homecontent';

const filActu = homecontent.map((item, i) => {
  return (
    <li className="actuItem" key={ i } > 
      <a href="#" className="categorie"> 
        <span > 
          { item.categorie } 
        </span> 
       </a>
      <a href="#"> { item.titre } </a>
    </li>
  )
})

const FilActu = () => {
    return (
      <div className="FilActu">
        <div className="title--h5">Fil Info</div>
        <ul>
          { filActu }
        </ul>
      </div>
    );
}

export default FilActu;
