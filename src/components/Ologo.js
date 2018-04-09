import React from 'react';

const Ologo = () => {
    return (
      <div className="Toplogo">
        <div className="Ologo">
          <div className="logowrapper">
              <span className="icon"> <i  className="fas fa-star"></i> </span>
              <span className="text"> SPORTS </span>
          </div>
        </div>
        {/* <br /> */}
        <div className="slogan container text-center">
          <span className="sloganspan"> Informations de Qualité Aux Sports Natiaux et Internationaux </span>
        </div>
      </div>
    );
}

export default Ologo;
