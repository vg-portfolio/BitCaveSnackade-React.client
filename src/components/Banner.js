import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';


class Banner extends Component {
    render(){
      const bannerStyle = {
        container: {
          margin: "0 auto",
          color: '#EC407A',
          backgroundColor: '#111111',
          color: 'white',
          height: '25rem',
          position: 'relative'
        },
        image: {
          // height: 'inherit',
          backgroundImage: 'url("https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/26173529_260702854462021_7517626745191258170_o.jpg?_nc_cat=101&oh=3ae087eabf11519cb562ba845d614547&oe=5C56772D")',
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
        }
      };

      return (
        <div>
          {/* <div style={bannerStyle.image}></div> */}
          <Carousel/>
        </div>
      );
    }

}

export default Banner;
