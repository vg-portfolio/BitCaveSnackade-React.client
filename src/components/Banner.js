import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Banner extends Component {
    render(){
      const bannerStyle = {
        container: {
          backgroundColor: '#111111',
          // flex box container to contain image,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          overflow: 'hidden',
        },
        image: {
          //Repsonsive image
          margin: '0 auto',
          maxHeight: '30rem',
          maxWidth: '30rem',
        }
      };

      return (
        <div style={bannerStyle.container}>

            <img style={bannerStyle.image} src="https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/26173529_260702854462021_7517626745191258170_o.jpg?_nc_cat=101&oh=3ae087eabf11519cb562ba845d614547&oe=5C56772D"/>

        </div>
      );
    }

}

export default Banner;
