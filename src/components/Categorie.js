import React, { Component } from 'react';
import Ologo from './Ologo';
import Header from './Header';
import Slider from './Slider';
import SideMenu from './SideMenu';
import Resultats from './Resultats';
import FilActu from './FilActu';
import CategorieContent from './CategorieContent';
import Tv from './Tv';
import Topbar from './Topbar';

class Categorie extends Component {
  render() {
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
              {/* <div className="col col-md-3">
                  <SideMenu />
                  <hr />
                  <Resultats />
              </div> */}
              <div className="col col-md-8">
                <CategorieContent />
              </div>
              <div className="col col-md-1">
              </div>
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
