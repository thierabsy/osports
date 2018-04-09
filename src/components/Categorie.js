import React, { Component } from 'react';
// import queryString from 'query-string';
import Ologo from './Ologo';
import Header from './Header';
import Slider from './Slider';
import CategorieSideMenu from './CategorieSideMenu';
import Resultats from './Resultats';
import FilActu from './FilActu';
import CategorieContent from './CategorieContent';
import Tv from './Tv';
import Topbar from './Topbar';

class Categorie extends Component {
  constructor(props){
    super(props)
  }
  render() {
    // let page = queryString.parse(this.props.location.search);
    let categorie = this.props.match.params.categorie;
    let pays = this.props.match.params.pays;
    console.log(categorie, pays);
    // let categorie = page.categorie;
    // console.log(categorie);

    return (
      <div className="Homepage">
        <div className="Head">
          <Topbar />
          <Ologo />
          <Header />
        </div>
        <div className="container banner text-center">
            Banner
        </div>
        <div className="container">
          <div className="row">
              <div className="col col-md-3">
                  <CategorieSideMenu 
                    
                  />
                  <hr />
                  <Resultats />
              </div>
              <div className="col col-md-6">
                <CategorieContent 
                  categorie={categorie}
                  pays={pays}
                />
              </div>
              {/* <div className="col col-md-1">
              </div> */}
              <div className="col col-md-3">
                <FilActu />
                <Tv />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categorie;
