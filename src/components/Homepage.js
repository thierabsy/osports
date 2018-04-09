import React, { Component } from 'react';
import Ologo from './Ologo';
import Header from './Header';
import Slider from './Slider';
import SideMenu from './SideMenu';
import Resultats from './Resultats';
import FilActu from './FilActu';
import HomepageContent from './HomepageContent';
import Tv from './Tv';
import Topbar from './Topbar';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="Head">
          <Topbar />
          <Ologo />
          <Header />
        </div>
        <div className="Slider">
          <div className="container cslider">
            <Slider />
          </div>
        </div>
        <div className="container banner text-center">
            Banner
        </div>
        <div className="container">
          <div className="row">
              <div className="col col-md-3">
                  <SideMenu />
                  <hr />
                  <Resultats />
              </div>
              <div className="col col-md-6">
                <HomepageContent />
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

export default Homepage;
