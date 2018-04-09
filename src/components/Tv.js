import React from 'react';
import { homecontent } from './data/homecontent';

// const Tv = homecontent.map((item, i) => {
//   return (
//     <li className="actuItem" key={ i } > 
//       <a href="#" className="categorie"> 
//         <span > 
//           { item.categorie } 
//         </span> 
//        </a>
//       <a href="#"> { item.titre } </a>
//     </li>
//   )
// })

const Tv = () => {
    return (
      <div className="Tv">
        <div className="title--h5">Osports TV</div>
        <iframe 
          width="100%" height="250px" 
          src="https://www.youtube.com/embed/c7rPcjgiTHc?controls=0&amp;showinfo=0" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default Tv;
