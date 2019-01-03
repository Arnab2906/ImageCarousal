import React, { Component } from 'react';
import './App.css';



class CarouselLeftArrow extends Component {
  render() {
    return (
      <div className="prev" onClick={this.props.onClick}></div>
    );
  }
}

export default CarouselLeftArrow;