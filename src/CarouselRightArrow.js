import React, { Component } from 'react';
import './App.css';



class CarouselRightArrow extends Component {
  render() {
    return (
    <div className="next" onClick={this.props.onClick}></div> 
    );
  }
}

export default CarouselRightArrow;