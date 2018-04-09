import React from 'react';
import { homecontent } from './data/homecontent';
import { categories } from './data/categories';

let catFilter = (categorie) => categories.filter( a => a.categorie === categorie);
const articles = homecontent.map((item, i) => {
  let categorie = catFilter(item.categorie);
  let color = categorie[0] && categorie[0].color
  let styles= {
    background: color
  }
  let pSize = item.size === 6 ? item.size * 20 : "auto";
  let imgHeight = item.size * 25;
  return (
    <div className={`col col-sm-12 col-md-${item.size}`} key={ i } > 
      <div className="article">
        <img src={ `img/${item.image}.jpg` } alt={ item.categorie } style={{ height: imgHeight }} />
        <div className="artLinks d-flex">
          <a href="#" className="a--left">
            <span className="categorie" style={styles} > 
              { item.categorie } 
            </span>
          </a> 
          <a href="#" className="a--right"> 
            <h5>{ item.titre } </h5>
            <p style={{ height: pSize }} > { item.summary } </p>
          </a>
        </div>
        <div className="artFooter">
          <div className="row">
            <div className="col col-md-4 text-center">
              12/05/18
            </div>
            <div className="col col-md-6 text-center auteur">
              Kaw Diallo
            </div>
            <div className="col col-md-2 text-center">
              <i className="fas fa-share-alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

const CategorieContent = () => {
    return (
      <div className="Articles">
        <div className="row">
          { articles }
        </div>
      </div>
    );
}

export default CategorieContent;
