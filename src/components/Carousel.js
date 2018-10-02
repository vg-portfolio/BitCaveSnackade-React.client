import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {

    return (
      <Carousel className="carousel-container">
        <img src="https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/26173529_260702854462021_7517626745191258170_o.jpg?_nc_cat=101&oh=3ae087eabf11519cb562ba845d614547&oe=5C56772D"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
