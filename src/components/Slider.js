import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 4
    };
    // this.randomizer = this.randomizer.bind(this);
  }

  componentDidMount(){
    // setInterval( ()=> {
    //   let activeSlide = Math.floor((Math.random() * 5) + 1);
    //   console.log(activeSlide);
    //   this.setState({
    //     active: activeSlide
    //   });
    // } , 5000)
  }

  render() {
    return (
      <div className="sliderwrapper">
        {/* <button onClick={this._handleClick.bind(this)}>Radom</button> */}
        <Coverflow
          width={"100%"}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
          infiniteScroll={true}
          currentFigureScale={1.5}
          // otherFigureScale={}
        >
          {/* <div
            // onClick={() => fn()}
            // onKeyDown={() => fn()}
            // role="menuitem"
            // tabIndex="0"
          >
            <img src='img/slider1.jpg' alt='Album one' />
          </div> */}
          <img src='img/slider1.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          <img src='img/slider2.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          <img src='img/slider3.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          <img src='img/slider4.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          {/* <div style={{background: "white"}} >Hello, Slider</div> */}
          <img src='img/slider5.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          <img src='img/slider6.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
          <img src='img/volley.jpg' alt='SLIDER OSPORTS' data-action="http://passer.cc"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

export default Slider;
