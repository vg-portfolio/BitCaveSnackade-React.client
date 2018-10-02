import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGalleryImages } from '../actions';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../containers/ImageCard';


function mapStateToProps(state){
  console.log("MAP STATE TO PROPS GALLERY");
  return { siteData: state.siteInfo };
}


class Gallery extends Component {
  componentWillMount(){
    console.log("MOUNTING");
    this.props.fetchGalleryImages();
  };

  render(){
    const galleryStyle = {
      section: {
        flexGrow: 1,
        padding: '4rem 2rem',
        backgroundColor: 'black'
      }
    }

    return (
      <div style={galleryStyle.section}>
        <Grid container spacing={16} justify='center'>
            {this.props.siteData.gallery.map(image => (
              <Grid item xs={4} md={3} lg={2} key={image}>
                <ImageCard title={image}/>
              </Grid>
            ))}
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchGalleryImages })(Gallery);
