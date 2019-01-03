import React, { Component } from 'react';
import './App.css';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselSlide from './CarouselSlide';
import CarouselRightArrow from './CarouselRightArrow';
import CarouselIndicator from './CarouselIndicator';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      data:data
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.data.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.data.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
      <h1>Image Carousal</h1>
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.state.data.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.state.data.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default App;