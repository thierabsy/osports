import React from 'react';

const Topbar = () => {
    return (
      <div className="Topbar">
        <div className="container">
          <div className="row">
            <div className="col col-md-4 tbLeft">
              <span className="osports">Osports Média</span>
            </div>
            <div className="col col-md-4 text-center tbCenter">
              <a href="www.facebook.com" target="_blank" className="socialIcon"> <i className="tbIcon fab fa-facebook-f" /> </a>
              <a href="www.twitter.com" target="_blank" className="socialIcon"> <i className="tbIcon fab fa-twitter" /></a>
              <a href="www.youtube.com" target="_blank" className="socialIcon"> <i className="tbIcon fab fa-youtube" /></a>
              <a href="www.linkedin.com" target="_blank" className="socialIcon"> <i className="tbIcon fab fa-linkedin-in" /> </a>
            </div>
            <div className="col col-md-4 text-right tbRight">
              Connection <i className="fas fa-sign-in-alt" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Topbar;
