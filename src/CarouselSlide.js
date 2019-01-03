import React, { Component } from 'react';
import './App.css';

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img className="carousel-slide__content" src={this.props.slide.picture}/>

       
      </li>
    );
  }
}

export default CarouselSlide;